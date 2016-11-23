function rysujChoinke(liczbaWierszy) {
    for (var numerWiersza = 1; numerWiersza <= liczbaWierszy; numerWiersza++) {

        var gwiazdkiDoWypisania = "";
        for (var i = 0; i < 2*numerWiersza-1; i++) {
            gwiazdkiDoWypisania += "*";
        }
        console.log("Nr wiersza to:", numerWiersza, "liczba wierszy to:", liczbaWierszy, gwiazdkiDoWypisania);
        
    }
}

rysujChoinke(5);
