//PRECIO BASE DE LA COTIZACION 
var precio_base = 2000

//VALORES DE LOS RECARGOS  
var edad_18 = 0.1   // 10%
var edad_25 = 0.2   // 20%
var edad_50 = 0.3   // 30%
var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%
var hijos_recargo = 0.2 // 20%

//VARIABLES DE RECARGO 
var recargo = 0
var recargo_total = 0

//PRECIO FINAL  
var precio_final = 0

var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
var casado = prompt("¿Está casado actualmente?", "si/no")

//COMPROBAMOS LA EDAD DEL CONYUGE 
if("SI" == casado.toUpperCase()){
  var edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}

//CONVIRTIENDO LAS EDADES INGRESDAS EN NUMERICAS  
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0

//CONVIRTIENDO LA EDAD DEL CONYUGE SI ES QUE ESTA CASADO 
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
if("SI" == hijos.toUpperCase()){
  var cantidad_hijos = prompt("¿Cuántos hijos tiene? Ingrese solamente números")
}
  
//SE CONVIERTE LA CANTIDAD DE HIJOS A NUMERICO 
cantidad_hijos = parseInt(cantidad_hijos)

//SE CALCULA EL RECARGO QUE TENDRA EL ASEGURADO 
if(edad_numero >= 18 && edad_numero <= 24){
  recargo = precio_base * edad_18 
  recargo_total = recargo_total + recargo 
}else if(edad_numero >= 25 && edad_numero <=49){
  recargo = precio_base * edad_25 
  recargo_total = recargo_total + recargo 
}else{ 
  recargo = precio_base * edad_50 
  recargo_total = recargo_total + recargo 
}
  
//SE CALCULA EL RECARGO QUE TENDRA EL CONYUGE DEL ASEGURADO 
if(edad_conyuge_numero >= 18 && edad_conyuge_numero <= 24){
  recargo = precio_base * casado_18 
  recargo_total = recargo_total + recargo 
}

if(edad_conyuge_numero >= 25 && edad_conyuge_numero <=49){
  recargo = precio_base * casado_25 
  recargo_total = recargo_total + recargo 
}

if(edad_conyuge_numero > 50){ 
  recargo = precio_base * casado_50 
  recargo_total = recargo_total + recargo 
}

//SE CALCULA EL RECARGO POR LA CANTIDAD DE HIJOS DEL ASEGURADO 
if(cantidad_hijos > 0){
  recargo = precio_base * hijos_recargo
  recargo = recargo * cantidad_hijos
  recargo_total = recargo_total + recargo
}

//SE CALCULA EL PRECIO FINAL A PAGAR 
precio_final = precio_base + recargo_total

//SE IMPRIME RESULTADO 
alert ("Para el asegurado " + nombre)
alert ("El recargo total sera de: Q "+ recargo_total)
alert ("El precio sera de: Q " + precio_final)