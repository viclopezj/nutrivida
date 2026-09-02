// Formatea un número como precio en pesos chilenos, ej: 12990 -> $12.990
function formatearPrecio(valor) {
    return "$" + Math.round(valor).toLocaleString("es-CL");
}

// Calcula el precio total de un plan según las comidas marcadas y la duración elegida.
function calcularTotal(plan, tarjeta) {
    const checkboxes = tarjeta.querySelectorAll(".comida-check");
    const duracionSelect = tarjeta.querySelector(".plan-duracion");
    const totalTexto = tarjeta.querySelector(".plan-total-valor");
    const resumenTexto = tarjeta.querySelector(".plan-resumen");

    let totalDiario = 0;
    const seleccionadas = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            totalDiario += Number(checkbox.dataset.precio);
            seleccionadas.push(checkbox.dataset.nombre);
        }
    });

    const duracion = duraciones[duracionSelect.value];
    const totalFinal = totalDiario * duracion.dias * duracion.factor;

    if (seleccionadas.length === 0) {
        totalTexto.textContent = formatearPrecio(0);
        resumenTexto.textContent = "Selecciona al menos una comida para calcular tu plan.";
    } else {
        totalTexto.textContent = formatearPrecio(totalFinal);
        resumenTexto.textContent = seleccionadas.join(" + ") + " · " + duracion.etiqueta;
    }

    return totalFinal;
}

// Construye el bloque de checkboxes de comidas disponibles para un plan.
function crearComidasHTML(plan) {
    let html = "";
    for (const clave in plan.comidas) {
        const precio = plan.comidas[clave];
        html += `
            <label class="comida-opcion">
                <input type="checkbox" class="comida-check" data-nombre="${nombresComida[clave]}" data-precio="${precio}">
                <span class="comida-nombre">${nombresComida[clave]}</span>
                <span class="comida-precio">${formatearPrecio(precio)} / día</span>
            </label>`;
    }
    return html;
}

// Construye el selector de duración (semanal, mensual, trimestral).
function crearDuracionHTML() {
    let html = "";
    for (const clave in duraciones) {
        html += `<option value="${clave}">${duraciones[clave].etiqueta}</option>`;
    }
    return html;
}

// Dibuja todas las tarjetas de planes dentro del contenedor #planes-lista.
function renderizarPlanes() {
    const contenedor = document.getElementById("planes-lista");
    if (!contenedor) return;

    planes.forEach((plan) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "plan-tarjeta";
        tarjeta.innerHTML = `
            <div class="plan-imagen">
                <img src="${plan.imagen}" alt="${plan.nombre}">
            </div>
            <div class="plan-info">
                <span class="plan-categoria">${plan.categoria}</span>
                <h3>${plan.nombre}</h3>
                <p class="plan-descripcion">${plan.descripcion}</p>

                <div class="plan-comidas">
                    ${crearComidasHTML(plan)}
                </div>

                <div class="plan-configuracion">
                    <label for="duracion-${plan.id}">Tipo de plan:</label>
                    <select id="duracion-${plan.id}" class="plan-duracion">
                        ${crearDuracionHTML()}
                    </select>
                </div>

                <p class="plan-resumen">Selecciona al menos una comida para calcular tu plan.</p>

                <div class="plan-total">
                    <span>Total:</span>
                    <span class="plan-total-valor">$0</span>
                </div>

                <button type="button" class="btn-agregar btn-agregar-plan">Agregar al carrito</button>
            </div>`;

        contenedor.appendChild(tarjeta);

        // Escucha cambios en los checkboxes y en el selector de duración de esta tarjeta.
        tarjeta.querySelectorAll(".comida-check").forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
                // Alterna el estilo visual de "pastilla seleccionada" (verde oscuro sólido).
                checkbox.closest(".comida-opcion").classList.toggle("seleccionada", checkbox.checked);
                calcularTotal(plan, tarjeta);
            });
        });
        tarjeta.querySelector(".plan-duracion").addEventListener("change", () => calcularTotal(plan, tarjeta));

        // Botón para agregar el plan configurado al carrito.
        tarjeta.querySelector(".btn-agregar-plan").addEventListener("click", () => {
            const total = calcularTotal(plan, tarjeta);
            const algunaSeleccionada = tarjeta.querySelectorAll(".comida-check:checked").length > 0;

            if (!algunaSeleccionada) {
                alert("Debes seleccionar al menos una comida antes de agregar el plan.");
                return;
            }

            agregarAlCarrito(1);
            alert(`"${plan.nombre}" fue agregado al carrito por ${formatearPrecio(total)}.`);
        });
    });
}

document.addEventListener("DOMContentLoaded", renderizarPlanes);
