

var choinka = "   *<br>" + "  ***<br>" + " *****<br>"  + "*******<br>"  ;

document.write(choinka);


document.write("<br><br>--------------------<br>");

var choinka = "";
var gwiazdka = "*";

for (var i= 0; i <= 3; i++) {
    console.log('wartosc i', i);
    
    for ( var j=0; j <=2-i; j++) {
        document.write(" ");
        console.log('j', j, 'i',i);
    }
    document.write(gwiazdka + "<br>");
    gwiazdka += "**";
    console.log(gwiazdka);
}
    document.write(choinka);


document.write("<br><br>--------------------<br>");


 var width=1;
     for (i=0; i<=4; i++) {
         for (j=1; j<width; j++) {
     document.write(" *");
 }
     document.write("<br>");
     width=width+1;

     }

