function addNewElement(argument) {
    console.log(argument);
}

var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

var newElement = 1;

add.addEventListener('click', function(e) {
    addNewElement('klikniety')
    list.innerHTML += '<li>item '+ newElement +'</li>';
    newElement++;
    console.log('Ile ma lista dzieci: ' + list.children.length);
});


