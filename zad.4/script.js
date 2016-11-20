function getTriangleArea(a, h) {
    if ((a > 0) && (h > 0)) {
        console.log('Dodatni');
        return a*h/2
    } 

    console.log('Ujemny');
    return "Nieprawdidlowe dane"


};

console.log(getTriangleArea(10,6) );
console.log("wolam Cie po raz 2: ", getTriangleArea(20,6) );
console.log(getTriangleArea(135,6) );

console.log("-------------------")

var triangle1Area = getTriangleArea(10, 15);
console.log("moja zmienna: ", triangle1Area);
console.log("drugi raz moja zmienna", triangle1Area);

console.log("trzeci raz moja zmienna", triangle1Area);