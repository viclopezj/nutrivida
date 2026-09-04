// Declaración del formulario
let formulario = document.getElementById("registro"); // Corregido ID a 'registro'
let nombre = document.getElementById("nombre");
let rut = document.getElementById("rut");
let correo = document.getElementById("correo");
let telefono = document.getElementById("telefono");

// Variables para la validación de contraseña
var myInput = document.getElementById("contrasenia");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// Mostrar el cuadro de mensaje al enfocar el input de contraseña
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// Ocultar el cuadro de mensaje al salir del input
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// Validación en tiempo real mientras el usuario escribe
myInput.onkeyup = function() {
    // Validar letras minúsculas
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) { 
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validar letras mayúsculas
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) { 
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validar números
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) { 
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validar longitud mínima
    if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

// Validación global del envío del formulario
formulario.addEventListener("submit", function(event){
    if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)){
        alert("El nombre debe contener solo letras");
        nombre.focus();
        event.preventDefault();
        return;
    }

    if(!/^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]$/.test(rut.value)){
        alert("El RUT no tiene un formato válido (ejemplo: 12.345.678-k)");
        rut.focus();
        event.preventDefault();
        return;
    }

    if(!/^[^\s@]+@(gmail\.com|duocuc\.cl|outlook\.com)$/.test(correo.value)){
        alert("El correo debe ser válido y pertenecer a @gmail.com, @duocuc.cl o @outlook.com");
        correo.focus();
        event.preventDefault();
        return;
    }

    if(!/^\+56\d{9}$/.test(telefono.value)){
        alert("El teléfono debe comenzar con +56 y tener 9 dígitos adicionales (ejemplo: +56912345678)");
        telefono.focus();
        event.preventDefault();
        return;
    }

    let fenac = document.getElementById("fenac");
    let limite = new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0];

    if (fenac.value > limite) {
        alert("Debes tener 18 años o más para registrarte");
        fenac.focus();
        event.preventDefault();
        return;
    }
});

// Función para alternar la visibilidad de la contraseña
function mostrar() {
    var x = document.getElementById("contrasenia");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}