var repeatElements = [];
container = document.getElementsByClassName("symbol");
pierwiastek = [];
y = 0;
for (x = 0; x < container.length; x++) {
    if (container[x].textContent != 'DE' && container[x].textContent != 'DEL' && container[x].textContent != '57-71' && container[x].textContent != '89-103') {
        pierwiastek[y] = container[x];

        console.log(y + "-" + pierwiastek[y].textContent);
        y++;
    }
}
game();

function game() {
    console.log(repeatElements);
    if (repeatElements.length >= pierwiastki.length) {
        console.log("koniec gry");
    } else {
        losuj = Math.floor(Math.random() * pierwiastki.length);
        if (repeatElements.includes(losuj)) {
            game();
        } else {
            pierwiastek[losuj].parentElement.classList.add("checked");
            repeatElements.push(losuj)
        }
    }
}

function checkElement(event) {
    if (event.keyCode == 13) {
        if (event.target.value == pierwiastki[losuj][1]) {
            pierwiastek[losuj].parentElement.classList.remove("checked");
            pierwiastek[losuj].parentElement.classList.add("goodAnswer");
        } else {
            pierwiastek[losuj].parentElement.classList.remove("checked");
            pierwiastek[losuj].parentElement.classList.add("badAnswer");
        }
        game();
    }
}