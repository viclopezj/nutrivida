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

 function calcular(){
    pantalla.value = Number(pantalla.value) + Number(numero);
 }