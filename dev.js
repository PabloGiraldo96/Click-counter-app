let counter = 0;
const body = document.getElementById("body");
const square = document.getElementById("square");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3")

function aumentarClick (){
 updateDisplay(++counter);
square.style.backgroundColor ="#DCD6F7";
body.style.backgroundColor = "#D8C0CD";
btn1.style.backgroundColor = "#D8C0CD";
btn2.style.backgroundColor = "#D8C0CD";
btn3.style.backgroundColor ="#D8C0CD";
}

function restarClick (){
 updateDisplay(counter--);
}

function resetClick() {
    counter = 0;
    updateDisplay(counter);
body.style.backgroundColor = "#FCB79C";
square.style.backgroundColor ="#fdcfbc";
btn1.style.backgroundColor = "#FCB79C"
btn2.style.backgroundColor = "#FCB79C"
btn3.style.backgroundColor ="#FCB79C";
}

function updateDisplay(counter) {
    document.getElementById("counter-label").innerHTML = counter;
}
