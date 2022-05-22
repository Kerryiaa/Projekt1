var repeatElements = [];
container = document.getElementsByClassName("symbol");
elementsSymbol = [];
y = 0;
for (x = 0; x < container.length; x++) {
    if (container[x].textContent != 'DE' && container[x].textContent != 'DEL' && container[x].textContent != '57-71' && container[x].textContent != '89-103') {
        elementsSymbol[y] = container[x];

        console.log(y + "-" + elementsSymbol[y].textContent);
        y++;
    }
}
game();

function game() {
    console.log(repeatElements);
    if (repeatElements.length >= elements.length) {
        console.log("koniec gry");
    } else {
        randomElement = Math.floor(Math.random() * elements.length);
        if (repeatElements.includes(randomElement)) {
            game();
        } else {
            elementsSymbol[randomElement].parentElement.classList.add("checked");
            repeatElements.push(randomElement)
        }
    }
}

function checkElement(event) {
    if (event.keyCode == 13) {
        if (event.target.value == elements[randomElement][1]) {
            elementsSymbol[randomElement].parentElement.classList.remove("checked");
            elementsSymbol[randomElement].parentElement.classList.add("goodAnswer");
        } else {
            elementsSymbol[randomElement].parentElement.classList.remove("checked");
            elementsSymbol[randomElement].parentElement.classList.add("badAnswer");
        }
        game();
    }
}