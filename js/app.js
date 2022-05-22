var repeatElements = [];
//definciuje tablicę powtórzonych elementów
container = document.getElementsByClassName("symbol");
//container przyjmuje klasę "symbol"
elementsSymbol = [];
//definiuje tablicę symboli elementów
y = 0;
for (x = 0; x < container.length; x++) {
    if (container[x].textContent != 'DE' && container[x].textContent != 'DEL' && container[x].textContent != '57-71' && container[x].textContent != '89-103') {
        //wyklucza z symboli pola puste i z liczbami
        elementsSymbol[y] = container[x];
        // przypisuje właściwe liczb z pierwiastków do containerów
        console.log(y + "-" + elementsSymbol[y].textContent);
        y++;
        //co każdą pętlę dodaje do containera 1 aż osiągnie liczbę z y
    }
}
game();


function game() {
    console.log(repeatElements);
    if (repeatElements.length >= elements.length) {
        /*gdy liczba elementów tablicy z powtórzonymi pierwiastkami jest równa 0 lub większa
         od ilości pierwiastków następuje koniec gry*/
        console.log("koniec gry");
    } else {
        randomElement = Math.floor(Math.random() * elements.length);
        //generuje losową liczbę (generowanie odbywa się od 0 do 117, numery pierwiastków)
        if (repeatElements.includes(randomElement)) {
            // jeśli wylosowana liczba jest w tablicy powtórzonych, wykonaj funkcję game jeszcze raz  
            game();
        } else {
            elementsSymbol[randomElement].parentElement.classList.add("checked");
            // kolor wylosowanegoo pierwiatska zostaje zmieniony z szarego na różowy
            repeatElements.push(randomElement)
                // powtórzone pierwiastki dodaje do tablicy z powtórzonymi pierwiastkami
        }
    }
}

function checkElement(event) {
    if (event.keyCode == 13) {
        //wciśnięcie "enter" (eneter ma keyCode 13)
        if (event.target.value == elements[randomElement][1]) {
            elementsSymbol[randomElement].parentElement.classList.remove("checked");
            elementsSymbol[randomElement].parentElement.classList.add("goodAnswer");
            // usuwa kolor z "checked"(szary), a zamiast tego dodaje z "goodAnswer"(zielony)
        } else {
            elementsSymbol[randomElement].parentElement.classList.remove("checked");
            elementsSymbol[randomElement].parentElement.classList.add("badAnswer");
            // usuwa kolor z "checked" (szary), a zamiast tego dodaje z "badAnswer"(czerwony)
        }
        event.target.value = "";
        game();
    }
}