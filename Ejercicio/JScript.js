var segundos = document.getElementById("Segundos");
var minutos = document.getElementById("Minutos");
var horas = document.getElementById("Horas");

let countSegundos = 0;
let countMinutos = 0;
let countHoras = 0;
let timer;

timer = setInterval(CreateTime,1000);

function CreateTime(){
    if(countSegundos < 60){
        var x  = document.createElement("div");
        x.className = "segundo";
        x.innerHTML = countSegundos+1;
        segundos.appendChild(x);
        countSegundos++;
    }

    if(countSegundos >= 60 && countMinutos < 60){
        countSegundos = 0;
        segundos.innerHTML="";
        var x  = document.createElement("div");
        x.className = "minuto";
        x.innerHTML = countMinutos+1;
        minutos.appendChild(x);
        countMinutos++;
    }

    if(countMinutos >= 60 && countHoras < 60){
        countMinutos = 0;
        minutos.innerHTML="";
        var x  = document.createElement("div");
        x.className = "hora";
        x.innerHTML = countHoras+1;
        horas.appendChild(x);
        countHoras++;
    }

    if(countHoras >= 24){
        horas.innerHTML="";
        countHoras = 0;
    }
}
