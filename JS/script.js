 let pantalla = document.getElementById("pantalla");
 let numero;
 let operacion;

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
    operacion = "+";
    limpiar();
 }

 function resta(){
    numero = pantalla.value;
    operacion = "-";
    limpiar();
 }

 function multiplicacion(){
    numero = pantalla.value;
    operacion = "*";
    limpiar();
 }

 function division(){
    numero = pantalla.value;
    operacion = "/";
    limpiar();
 }

 function calcular(){
    if(operacion === "+"){
        pantalla.value = Number(numero) + Number(pantalla.value);
    }else if(operacion === "-"){
        pantalla.value = Number(numero) - Number(pantalla.value);
    }else if(operacion === "*"){
        pantalla.value = Number(numero) * Number(pantalla.value);
    }else if(operacion === "/"){
        pantalla.value = Number(numero) / Number(pantalla.value);
    }
}