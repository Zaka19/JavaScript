/* Crear un bucle que, partiendo de una variable a con un valor cualquiera, vaya haciendo los pasos
(y mostrándolos por consola) y que acabe cuando valga uno.
Después haremos una función que haga lo mismo y que nos devuelva una cadena con los pasos. */

var a = ConjeturaMatematica(58);
var b = CadenaConjeturaMatematica(58);
console.log(b);

var c = ValidarTelefono(600628869);
console.log("Validar numero: ");
if(c == false){
    console.log("No es un numero de telefon.")
}
else{
    console.log("Si es un numero;")
}

var d = FormatoNumero(600628869);
console.log(d);

var x = ValidarCifNumber(12345);
console.log(x);

function ConjeturaMatematica(a){
    var c = 1;
    while(a != 1){
        console.log("Paso " + c);
        if(a % 2 == 0){
            console.log(a + " / 2 = " + a / 2)
            a = a / 2;
        }
        else{
            console.log(a + " * 3 + 1 = " + (a * 3) + 1)
            a = (a * 3) + 1;
        }
        c++;
    }
}

function CadenaConjeturaMatematica(a){
    var c = a + ",";
    while(a != 1){
        if(a % 2 == 0){
            a = a / 2;
        c += a + ",";
        }
        else{
            a = (a * 3) + 1;
            c += a + ",";
        }
    }
    return c;
}

function ValidarTelefono(telefono){
    var a =  false;
    if (typeof telefono === 'number'){
        if(String(telefono).length == 9){
            a = true;
        } 
    }
    return a;
}

function FormatoNumero(_telefono){
    var a =  false;
    var frase = "";
    /* isNaN(telefono) */
   if(ValidarTelefono(_telefono)){
       a = true;
   }
    if(a == true){
        _telefono = String(_telefono);
       /* frase += c.slice(0,3);
        frase += "-";
        frase += c.slice(3,6);
        frase += "-";
        frase += c.slice(6,9);*/
        frase += _telefono.substring(0,3) + "-" + _telefono.substring(3,6) + "-" + _telefono.substring(6,9);
    }
    else{
        frase += "No es un numero."
    }
    return frase;
}

function ValidarCIF(cif){ 
    var b = false;
    var _cif = String(cif);
    if(isNaN(_cif.substring(0,1))){
        if(_cif.length == 9){
            if(isNaN(cif.substring(1,_cif.length))){
                b = true;
            }
        }
    }
    return b;
} 

function Frases(p1,p2){
    var frase = "";
    if(typeof p1 === 'string' && typeof p2 === 'string'){
        if(String(p1).length > String(p2).length){
            frase += p1;
        }
        else{
            frase += p2;
        }
    }
    else{
        frase += "No es un string."
    }
}