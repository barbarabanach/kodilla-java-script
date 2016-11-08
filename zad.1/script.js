

if (window.confirm("Do you really want to leave?")) { 
  window.open("exit.html", "Thanks for Visiting!");
}

var name = prompt('Twoje imie to');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);


var sign = prompt("What's your sign?");

if (sign.toLowerCase() == "scorpio") {
  alert("Wow! I'm a Scorpio too !" + name );
}