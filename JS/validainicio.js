    let inicio = document.getElementById("inicio");
    let correo = document.getElementById("correo");


    inicio.addEventListener("submit", function(event){
        event.preventDefault();

        if(!/^[^\s@]+@(gmail\.com|duocuc\.cl|outlook\.com)$/.test(correo.value)){
            alert("El correo debe ser válido y pertenecer a @gmail.com, @duocuc.cl o @outlook.com");
            correo.focus();
            return;
        }
    });

    function mostrar() {
        var x = document.getElementById("contrasenia");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }