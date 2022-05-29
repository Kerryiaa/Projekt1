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
        clearInterval(timerX);
        timer.innerHTML = "Koniec gry!!!";
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
            countDownDate += ( 5 * 1000 );

        
            
        } else {
            elementsSymbol[randomElement].parentElement.classList.remove("checked");
            elementsSymbol[randomElement].parentElement.classList.add("badAnswer");
            countDownDate -=( 5 * 1000 );
        }
        event.target.value = "";
        game();
    }
}


// Set the date we're counting down to
var countDownDate = new Date().getTime() + ( 0.5 * 60 * 1000 );
// Update the count down every 1 second
var timerX = setInterval (time,1000);
function time() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
 
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
     clearInterval(timerX);
    document.getElementById("timer").innerHTML = "Koniec gry";
    myInput.style.display = "none";
    resetButton.style.display="block";
    elementsSymbol[randomElement].parentElement.classList.add("badAnswer");
    // game();
}
}
resetButton=document.getElementById("reset");
resetButton.style.display="none";
resetButton.addEventListener("click",resetFunction);
function resetFunction(){
    console.log("działa")
    for (x=0; x<elementsSymbol.length; x++){
        console.log(elementsSymbol[x])
        elementsSymbol[x].parentElement.classList.remove("badAnswer");
        elementsSymbol[x].parentElement.classList.remove("goodAnswer");
        elementsSymbol[x].parentElement.classList.remove("checked");
    }

countDownDate = new Date().getTime() + ( 0.5 * 60 * 1000 );
game();
timerX = setInterval (time,1000);
repeatElements = [];
resetButton.style.display="none";
myInput.style.display="block";
}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
// }

// function bonus (){
 
// }