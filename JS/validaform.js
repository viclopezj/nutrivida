let formulario = document.getElementById("contacto") //Es para declarar variables
//var Es para declarar variable global
let nombre = document.getElementById("nombre")
let rut = document.getElementById("rut")
let correo = document.getElementById("correo")
let telefono = document.getElementById("telefono")

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)){
        alert("El nombre debe contener solo letras");
        nombre.focus();
        return;
    }

    if(!/^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]$/.test(rut.value)){
        alert("El RUT no tiene un formato válido (ejemplo: 12.345.678-k)");
        rut.focus()
        return;
    }

    if(!/^[^\s@]+@(gmail\.com|duocuc\.cl|outlook\.com)$/.test(correo.value)){
        alert("El correo debe ser válido y pertenecer a @gmail.com, @duocuc.cl o @outlook.com");
        correo.focus();
        return;
    }

    if(!/^\+56\d{9}$/.test(telefono.value)){
        alert("El teléfono debe comenzar con +56 y tener 9 dígitos adicionales (ejemplo: +56912345678)");
        telefono.focus();
        return;
    }

    let fenac = document.getElementById("fenac");

    // Fecha límite exacta de hoy hace 18 años (Formato: YYYY-MM-DD)
    let limite = new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0];

    if (fenac.value > limite) {
        alert("Debes tener 18 años o más para registrarte");
        fenac.focus();
        return;
    }
});