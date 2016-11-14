var text = 'Papugi koszta trawe, unoszac sie nad ziemnia 15 centymetrow, na czerwonych dywanach.';

var nextText = 'Zielone slonie koszta trawe, unoszac sie nad ziemnia 15 centymetrow, na czerwonych dywanach.';

var nextTextUpperCased = nextText.toUpperCase();
console.log(nextTextUpperCased);


var nextNewText = text.replace('Papugi', 'Animal');
console.log('Zamieniony tekst: ' + nextNewText);

var lengthOfText = nextText.length;

//////////

var indeksPolowy = nextText.length/2;

var leftSide = nextText.slice(0, indeksPolowy);
console.log('Polowa tekstu to: ', leftSide);
