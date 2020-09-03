
for(var p of document.getElementsByTagName("p")){
    console.log(p.innerHTML);
}
var pb = document.querySelectorAll("#parrafo2 b")
console.log(pb);
console.log(pb[0].innerHTML);
var input = document.getElementById("nombre");
console.log(input.value);
for(var p of document.getElementsByClassName("test")){
    console.log(p.title);
    p.style.color="red";
}
for(var p of document.getElementsByClassName("test")){
    p.addEventListener("click",function(){
        console.log(this.textContent);
    });
}

var input = document.getElementById("nombre");

input.addEventListener("keypress",verTexto);
input.addEventListener("dblclick",quitarLisening);

function verTexto(){
    if(event.keyCode==65 || event.keyCode == 97){
        event.preventDefault();
    }
    else{
    console.log(this.value + " " + event.keyCode + " " + event.altKey);
    }
}

function quitarLisening(){
    input.removeEventListener("keyup",verTexto);
}

var div = document.getElementById("Cuadrado");
div.addEventListener("click",aumentar);

setTimeout(remove,5000);

function aumentar(){
    this.innerHTML++;
    this.style.left=Math.floor(Math.random() * (innerWidth-25))+"px";
    this.style.top=Math.floor(Math.random() * (innerHeight-25))+"px";
    console.log(this);
}

function remove(){
    div.removeEventListener("click",aumentar);
}