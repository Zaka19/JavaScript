console.log("Hello");

var a = 5;
var result = "";
for(var b = 0; b < a; b++){
    for(var c = 0; c <= b; c++){
        document.write("*");
        console.log("*");
        result += "*";
    }
    document.writeln("<br>");
    console.log("\n");
    result += "\n";
}

console.log(result);