function initialize() {
     timer = 7;
     codeNum1 = parseInt(Math.random() * 3) + 1;
     codeNum2 = parseInt(Math.random() * 3) + 1;
     codeNum3 = parseInt(Math.random() * 3) + 1;
     code = codeNum1.toString() + codeNum2.toString() + codeNum3.toString();
}

function inputGuess11() {
     num1 = 1
}

function inputGuess12() {
    num1 = 2
}

function inputGuess13() {
    num1 = 3
}
function inputGuess21() {
    num2 = 1
}

function inputGuess22() {
   num2 = 2
}

function inputGuess23() {
   num2 = 3
}
function inputGuess31() {
    num3 = 1
}

function inputGuess32() {
   num3 = 2
}

function inputGuess33() {
   num3 = 3
}

function checkGuess() {
    const para = document.createElement("p");
    guess = num1.toString() + num2.toString() + num3.toString();
    if (guess == code) {
    para.textContent = "Congrats! Your guess of " + guess + " was right!";
    } else {
        para.textContent = "Sorry! Your guess of " + guess + " was wrong!";
    }
    document.body.appendChild(para);
}
const button = document.querySelector('button');
for (const button of buttons) {
    button.addEventListener("click", checkGuess());
}
