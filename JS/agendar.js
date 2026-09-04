// Estado de la reserva actual
const reserva = {
    nutricionista: null,
    fecha: null,
    hora: null
};

let mesActual = new Date();
mesActual.setDate(1);

const nombresMes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

/* ---------- PASOS ---------- */
function irAPaso(numero) {
    document.querySelectorAll(".paso-panel").forEach(p => p.classList.remove("activo"));
    document.getElementById("panel-paso-" + numero).classList.add("activo");

    document.querySelectorAll(".paso-indicador").forEach(ind => {
        const n = Number(ind.dataset.paso);
        ind.classList.toggle("completado", n < numero);
        ind.classList.toggle("activo", n === numero);
    });
}

/* ---------- PASO 1: NUTRICIONISTA ---------- */
function crearTarjetasNutricionistas() {
    const contenedor = document.getElementById("lista-nutricionistas");
    contenedor.innerHTML = nutricionistas.map(n => `
        <article class="nutri-tarjeta" data-id="${n.id}">
            <div class="nutri-tarjeta-imagen">
                <img src="${n.imagen}" alt="${n.especialidad}">
                <img class="nutri-foto" src="${n.foto}" alt="${n.nombre}">
            </div>
            <div class="nutri-tarjeta-info">
                <h3>${n.nombre}</h3>
                <p class="nutri-especialidad">${n.especialidad}</p>
                <p class="nutri-bio">${n.bio}</p>
                <p class="nutri-experiencia"><i class="fa fa-check-circle"></i> ${n.experiencia}</p>
            </div>
        </article>
    `).join("");

    contenedor.querySelectorAll(".nutri-tarjeta").forEach(tarjeta => {
        tarjeta.addEventListener("click", () => seleccionarNutricionista(Number(tarjeta.dataset.id)));
    });
}

function seleccionarNutricionista(id) {
    reserva.nutricionista = nutricionistas.find(n => n.id === id);
    reserva.fecha = null;
    reserva.hora = null;

    document.querySelectorAll(".nutri-tarjeta").forEach(t => {
        t.classList.toggle("seleccionada", Number(t.dataset.id) === id);
    });

    document.getElementById("btn-paso1-siguiente").disabled = false;
}

/* ---------- PASO 2: FECHA Y HORA ---------- */
function pintarCalendario() {
    const grid = document.getElementById("calendario-grid");
    document.getElementById("calendario-mes").textContent =
        nombresMes[mesActual.getMonth()] + " " + mesActual.getFullYear();

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const primerDia = new Date(mesActual.getFullYear(), mesActual.getMonth(), 1);
    const diasEnMes = new Date(mesActual.getFullYear(), mesActual.getMonth() + 1, 0).getDate();
    const offset = primerDia.getDay(); // 0 = domingo

    let html = "";
    for (let i = 0; i < offset; i++) {
        html += `<span class="dia-vacio"></span>`;
    }

    for (let dia = 1; dia <= diasEnMes; dia++) {
        const fecha = new Date(mesActual.getFullYear(), mesActual.getMonth(), dia);
        const esDomingo = fecha.getDay() === 0;
        const esPasado = fecha < hoy;
        const deshabilitado = esDomingo || esPasado;
        const seleccionado = reserva.fecha && fecha.getTime() === reserva.fecha.getTime();

        html += `<button type="button" class="dia-boton ${deshabilitado ? "deshabilitado" : ""} ${seleccionado ? "seleccionado" : ""}"
                    ${deshabilitado ? "disabled" : ""} data-dia="${dia}">${dia}</button>`;
    }

    grid.innerHTML = html;

    grid.querySelectorAll(".dia-boton:not(.deshabilitado)").forEach(boton => {
        boton.addEventListener("click", () => {
            const dia = Number(boton.dataset.dia);
            seleccionarFecha(new Date(mesActual.getFullYear(), mesActual.getMonth(), dia));
        });
    });
}

function cambiarMes(delta) {
    mesActual.setMonth(mesActual.getMonth() + delta);
    pintarCalendario();
}

function seleccionarFecha(fecha) {
    reserva.fecha = fecha;
    reserva.hora = null;
    pintarCalendario();
    pintarHorarios();
}

function pintarHorarios() {
    const contenedor = document.getElementById("bloque-horarios");
    const texto = document.getElementById("texto-horarios");

    if (!reserva.fecha) {
        contenedor.innerHTML = "";
        texto.textContent = "Selecciona primero un día en el calendario.";
        return;
    }

    const horarios = obtenerHorarios(reserva.fecha);
    const opciones = document.getElementById("info-dia");

    if (!horarios) {
        contenedor.innerHTML = "";
        texto.textContent = "Los domingos la clínica permanece cerrada. Elige otro día.";
        return;
    }

    const esSabado = reserva.fecha.getDay() === 6;
    texto.textContent = esSabado
        ? "Los sábados la atención es solo en horario de mañana."
        : "Horarios disponibles para el día seleccionado:";

    contenedor.innerHTML = horarios.map(hora => `
        <button type="button" class="hora-boton ${reserva.hora === hora ? "seleccionada" : ""}" data-hora="${hora}">${hora}</button>
    `).join("");

    contenedor.querySelectorAll(".hora-boton").forEach(boton => {
        boton.addEventListener("click", () => {
            reserva.hora = boton.dataset.hora;
            pintarHorarios();
            document.getElementById("btn-paso2-siguiente").disabled = false;
        });
    });
}

/* ---------- PASO 3: RESUMEN Y CONFIRMACIÓN ---------- */
function pintarResumen() {
    const opciones = { day: "numeric", month: "long", year: "numeric" };
    document.getElementById("resumen-nutricionista").textContent =
        reserva.nutricionista.nombre + " · " + reserva.nutricionista.especialidad;
    document.getElementById("resumen-fecha").textContent =
        reserva.fecha.toLocaleDateString("es-CL", opciones);
    document.getElementById("resumen-hora").textContent = reserva.hora + " hrs";
}

/* ---------- VALIDACIONES DEL PASO 3 ---------- */
function validarFormularioCita() {
    const campoNombre = document.getElementById("campo-nombre");
    const campoRut = document.getElementById("campo-rut");
    const campoTelefono = document.getElementById("campo-telefono");
    const campoCorreo = document.getElementById("campo-correo");

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(campoNombre.value.trim())) {
        alert("El nombre debe contener solo letras, sin números");
        campoNombre.focus();
        return false;
    }

    if (!/^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]$/.test(campoRut.value.trim())) {
        alert("El RUT no tiene un formato válido (ejemplo: 12.345.678-9)");
        campoRut.focus();
        return false;
    }

    if (!/^\+569\d{8}$/.test(campoTelefono.value.trim())) {
        alert("El teléfono debe comenzar con +56 9 y tener 9 dígitos adicionales (ejemplo: +56912345678)");
        campoTelefono.focus();
        return false;
    }

    if (!/^[^\s@]+@(gmail\.com|outlook\.com)$/.test(campoCorreo.value.trim())) {
        alert("El correo debe ser válido y pertenecer a @gmail.com o @outlook.com");
        campoCorreo.focus();
        return false;
    }

    return true;
}

function confirmarCita(evento) {
    evento.preventDefault();

    if (!validarFormularioCita()) {
        return;
    }

    document.getElementById("form-confirmacion").classList.add("oculto");
    document.getElementById("mensaje-exito").classList.remove("oculto");

    const nombre = document.getElementById("campo-nombre").value;
    document.getElementById("exito-nombre").textContent = nombre;
}

function reiniciarAgendamiento() {
    reserva.nutricionista = null;
    reserva.fecha = null;
    reserva.hora = null;

    document.getElementById("form-confirmacion").reset();
    document.getElementById("form-confirmacion").classList.remove("oculto");
    document.getElementById("mensaje-exito").classList.add("oculto");
    document.getElementById("btn-paso1-siguiente").disabled = true;
    document.getElementById("btn-paso2-siguiente").disabled = true;

    crearTarjetasNutricionistas();
    pintarCalendario();
    pintarHorarios();
    irAPaso(1);
}

/* ---------- INICIALIZACIÓN ---------- */
document.addEventListener("DOMContentLoaded", () => {
    crearTarjetasNutricionistas();
    pintarCalendario();
    pintarHorarios();

    document.getElementById("btn-mes-anterior").addEventListener("click", () => cambiarMes(-1));
    document.getElementById("btn-mes-siguiente").addEventListener("click", () => cambiarMes(1));

    document.getElementById("btn-paso1-siguiente").addEventListener("click", () => irAPaso(2));
    document.getElementById("btn-paso2-anterior").addEventListener("click", () => irAPaso(1));
    document.getElementById("btn-paso2-siguiente").addEventListener("click", () => {
        pintarResumen();
        irAPaso(3);
    });
    document.getElementById("btn-paso3-anterior").addEventListener("click", () => irAPaso(2));

    document.getElementById("form-confirmacion").addEventListener("submit", confirmarCita);
    document.getElementById("btn-nueva-cita").addEventListener("click", reiniciarAgendamiento);
});
