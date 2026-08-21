 let pantalla = document.getElementById("pantalla");
 let numero;

 function agregar(valor){
 if(pantalla.value === "0")
    pantalla.value = valor;
 else
    pantalla.value += valor;
 }

 function limpiar(){
    pantalla.value = "0";
 }
 
 function suma(){
    numero = pantalla.value;
    limpiar();
 }

 function resta(){
    numero = pantalla.value;
    limpiar();
 }

 function multiplicacion(){
    numero = pantalla.value;
    limpiar();
 }

 function division(){
    numero = pantalla.value;
    limpiar();
 }

 function calcular()
    if(function suma){
        pantalla.value = Number(pantalla.value) + Number(numero);
    else if(function resta)
        pantalla.value = Number(pantalla.value) - Number(numero);
    else if(function multiplicacion)
        pantalla.value = Number(pantalla.value) * Number(numero);
 }