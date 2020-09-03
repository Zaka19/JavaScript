import {getJSON, postJSON} from './GenericCRUD.js';

let obj;

let id = getParameterByName("id");
document.getElementById("Modificar").addEventListener("click",Update);
init();

function init(){
    getJSON("https://localhost:44338/api/Lineas/"+id)
    .then(data => valores(data,id))
    .catch(error => console.log(error));
}

function Update(){
    let Servicio = document.getElementById("Servicio").value;
    let Precio = document.getElementById("Precio").value;
    let HDS = document.getElementById("hds").value;

    if(Servicio != obj.servicio){
        obj.servicio = Servicio;
    }

    if(Precio != obj.precio){
        obj.precio = Precio;
    }

    if(HDS != obj.hojaServicioId){
        obj.hojaServicioId = HDS;
    }

   postJSON("https://localhost:44338/api/Lineas/"+id,obj,'PUT')
   .then(data => document.getElementById("res").innerText = "Modificada!!!")
   .catch(error =>document.getElementById("res").innerText = "Error!!!")
   setTimeout(function() {document.getElementById("res").innerText=""},2000);
}

function valores(data,id){
   obj = {
       id: id,
       servicio: data.servicio,
       precio: data.precio,
       hojaServicioId: data.hojaServicioId
   }
   
   document.getElementById("Id").value = id;
   document.getElementById("Servicio").value = obj.servicio;
   document.getElementById("Precio").value = obj.precio;
   document.getElementById("hds").value = obj.hojaServicioId;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}