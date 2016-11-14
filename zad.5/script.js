var test = [];
var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = test.concat(womensNames, mensNames);

function dodajImie (allNames, newName) {
    if (allNames.indexOf(newName) == -1) {
        allNames.push(newName);
        console.log('Nowe imie to: ' + newName);
    } else if (allNames.indexOf(newName) > -1) {
        console.log(newName + ' juz istnieje');
    }
}

dodajImie(allNames, 'Marian');
dodajImie(allNames, 'Marian');
