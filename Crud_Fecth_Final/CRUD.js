import {getJSON, RemoveJSON} from './GenericCRUD.js';

init();

function init() {
    getJSON("https://localhost:44338/api/Lineas")
        .then(data => CreateLi(data))
        .catch(error => console.log(error));
}

function CreateLi(data) 
{
    let body=document.getElementById("tablebody");
    body.innerHTML="";
    for (let linea of data) 
    {
        let tr = document.createElement('tr');
        for (const propiedad in linea) {
            let td = document.createElement('td');
            td.innerText = linea[propiedad];
            tr.appendChild(td);
        }
        let a = document.createElement("a");
        a.href = "Update.html?id="+linea.id;
        a.appendChild(createButton("button","Modificar",linea.id));
        tr.appendChild(a);
        tr.appendChild(createButton("button","Borrar",linea.id));
        body.appendChild(tr);
    }
}

function createButton(message1,message2,id){
    let Button = document.createElement(message1);
    Button.innerText = message2;
    Button.value = id;
    if(message2 == "Borrar"){
        Button.addEventListener("click", function () { Remove(Button.value) });
    }
    return Button
}

function Remove(id) {
    if(confirm("Seguro que quieres borrar el registro " + id + "?") == true){
        RemoveJSON("https://localhost:44338/api/Lineas/"+id)
        .then(data => init())
        .catch(error => console.log(error));
    }
}