let inicio = document.getElementById("inicio");
let correo = document.getElementById("correo");
let contrasenia = document.getElementById("contrasenia");

inicio.addEventListener("submit", function(event){
    // Previene el envío inmediato para validar los campos
    event.preventDefault();

    // Validar formato del correo
    if(!/^[^\s@]+@(gmail\.com|duocuc\.cl|outlook\.com)$/.test(correo.value)){
        alert("El correo debe ser válido y pertenecer a @gmail.com, @duocuc.cl o @outlook.com");
        correo.focus();
        event.preventDefault();
        return;
    }

    // Validar que la contraseña no esté vacía ni contenga solo espacios
    if(contrasenia.value.trim() === ""){
        alert("Por favor ingrese su contraseña.");
        contrasenia.focus();
        event.preventDefault();
        return;
    }

    // Si todo es válido
    alert("¡Inicio de sesión exitoso!");
    // Aquí puedes redirigir al usuario o enviar los datos al servidor
    // inicio.submit();
});

function mostrar() {
    var x = document.getElementById("contrasenia");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}