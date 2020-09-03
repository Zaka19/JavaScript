import {getJSON, postJSON} from './GenericCRUD.js';

Lista();

let Create = document.getElementById("Create");
Create.addEventListener("click",init);

function init(){
    let Servicio = document.getElementById("Servicio").value;
    let Precio = document.getElementById("Precio").value;
    let HDP = document.getElementById("HDS").value;

    let Linia = {
        servicio: Servicio,
        precio: Precio,
        hojaServicioId: HDP
    }

   postJSON("https://localhost:44338/api/Lineas",Linia,'POST')
   .then(data => document.getElementById("res").innerText = "Creada!!!")
   .catch(error => document.getElementById("res").innerText = "Error!!!");
   setTimeout(function() {document.getElementById("res").innerText=""},2000);
}

function Lista() {
    getJSON("https://localhost:44338/api/HojaServicios")
        .then(data => CreateLi(data))
        .catch(error => console.log(error));
}

function CreateLi(data) {
    let body=document.getElementById("tablebody");
    body.innerHTML="";
    for (let hoja of data) {
        let tr = document.createElement('tr');
        for (const propiedad in hoja) {
            console.log(propiedad);
            
            let td = document.createElement('td');
            td.innerText = hoja[propiedad];
            tr.appendChild(td);
        }
        body.appendChild(tr);
    }
}
