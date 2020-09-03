var Container = document.getElementById("Container");

var lista = new Array();

for(var x1 = 1; x1 <= 100; x1++){
    lista.push(x1);
}

for(var a = 1; a <= lista.length;a++){
    var x = document.createElement("div");
    x.className="caja";
    x.innerText=GenerarNum();
    Container.appendChild(x);
}

function GenerarNum(){
    var b = Math.floor(Math.random() * lista.length)+1;
    while(lista[b - 1] == 0){
        b = Math.floor(Math.random() * lista.length)+1;
    }
    lista[b-1] = 0;
    return b;
}

var num = 1;

for(var d of document.getElementsByClassName("caja")){
        d.addEventListener("click",AdivinarNumero);
}

setTimeout(Remove,240000);

function AdivinarNumero(){
    if(this.innerText == num){
        this.style.backgroundColor='green';
        num++;
    }
    else{
        if(this.style.backgroundColor != 'green'){        
        this.style.backgroundColor='red';
        Remove();
        totalTime = 0;
        }
    }
}

function Remove(){
    for(var d of document.getElementsByClassName("caja")){
        d.removeEventListener("click",AdivinarNumero);
    }
}

window.onload = updateClock;
    var totalTime = 240;
    function updateClock() {
        document.getElementById('countdown').innerHTML = totalTime;
        if(totalTime==0){
            alert('Has perdut');
        }else{
            totalTime-=1;
            setTimeout("updateClock()",1000);
        }
    }

let count = 0;
let timer = 0;

document.getElementById("start").addEventListener("click",start);
document.getElementById("stop").addEventListener("click",stop);

function start(){
    if(timer === 0){
        timer = setInterval(tic,1000);
    }
}

function stop(){
    clearInterval(timer);
    timer = 0;
}

function tic(){
    document.getElementById("res").innerHTML=count;
    count++;
}