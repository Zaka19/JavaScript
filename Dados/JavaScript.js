
let Dado1 = "";
let Dado2 = "";
let Resultado;
let Saldo = 0;
let SaveNumber;

let btnRandom = document.getElementById("btnRandom").addEventListener("click",init);
let btnRandom2 = document.getElementById("btnRandom2").addEventListener("click",initSecond);

function init(){
    // Clear();
    Dado1 = Random();
    Dado2 = Random();
    Resultado = Dado1 + Dado2;
    console.log(Dado1,Dado2,Resultado);
    document.getElementById("D1").src = "./Imagen/" + Dado1 + ".png";
    document.getElementById("D2").src = "./Imagen/" + Dado2 + ".png";
    MetaGame();
}

function initSecond(){
    Dado1 = Random();
    Dado2 = Random();
    Resultado = Dado1 + Dado2;
    //console.log(Dado1,Dado2,Resultado);
    document.getElementById("D1").src = "./Imagen/" + Dado1 + ".png";
    document.getElementById("D2").src = "./Imagen/" + Dado2 + ".png";
    MetaGame2();
}

function Random(){
    return Math.floor(Math.random()*6)+1;
}

function MetaGame(){
    if(Resultado == 7 || Resultado == 11){
        Saldo++;
    }
    else if(Resultado == 2 || Resultado == 3 || Resultado == 12){
        Saldo--;
    }
    else{
        SaveNumber = Resultado;
        hiddenPrimary("btnRandom2","btnRandom");
    }
    document.getElementById("saldo").innerText = Saldo;
}

function MetaGame2(){
    if(Resultado == 7){
        Saldo--;
        hiddenPrimary("btnRandom","btnRandom2");
    }
    else if(Resultado == SaveNumber){
        Saldo++;
        hiddenPrimary("btnRandom","btnRandom2");
    }
    // else{
    //     SaveNumber = Resultado;
    // }
    document.getElementById("saldo").innerText = Saldo;
}

// function Clear(){
//     document.getElementById("D1").style.display = 'none';
//     document.getElementById("D2").style.display = 'none';
// }

function hiddenPrimary(show,hidden){
    document.getElementById(show).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
}
