var a = prompt("Wpisz swoja ulubiona liczbe...");
var b = prompt("Jeszcze jedna...:)");


formula = (a*a) + (2 * a * b) - (b*b)

var value = (formula)

console.log(formula)


if (value >= 0) {
    console.log('Wynik dodatni');
} else {
    console.log('Wynik ujemny');
}


if (value == 0) {
    alert('Wynik = 0');
} else {
    alert('Wynik != 0')
}
