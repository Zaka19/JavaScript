/*
var a = document.getElementById("texto");
var b = document.getElementById("caracter");
var c = document.getElementById("letra");
var d = document.getElementById("palabra");
let codeChar;

a.addEventListener("keyup",Texto);

function Texto(){
    b.innerHTML = a.value.length;
    c.innerHTML = a.value.replace(/\s/g, "").length;
    d.innerHTML = a.value.split(" ").filter((e) => e.length > 0).length;
}
*/


var a = document.getElementById("textoCesar").addEventListener("keyup",carga);

function carga(){
   var a = document.getElementById("textoCesar").value;
   var f = document.getElementById("Desplazamiento").value;

   document.getElementById("textoMostrarCesar").value =  TextoCesar(a,f);
}

function TextoCesar(as,f){
   var c = "";
   for(let a = 0; a < as.length;a++){
      c += String.fromCharCode(((as.toUpperCase().charCodeAt(a) - 65 + parseInt(f) % 26 + 26) % 26) + 65);
   }
   return c;
}