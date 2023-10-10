function initialize() {
     timer = 7;
     timerDiv = document.getElementById("timeCount");
     timerDiv.innerHTML = timer;
     guessIn = document.getElementById("guessLog");
     num1 = 0;
     num2 = 0;
     num3 = 0;
     codeNum1 = parseInt(Math.random() * 3) + 1;
     codeNum2 = parseInt(Math.random() * 3) + 1;
     codeNum3 = parseInt(Math.random() * 3) + 1;
     code = codeNum1.toString() + codeNum2.toString() + codeNum3.toString();
}

function inputGuess11() {
     num1 = 1;
}

function inputGuess12() {
    num1 = 2;
}

function inputGuess13() {
    num1 = 3;
}
function inputGuess21() {
    num2 = 1;
}

function inputGuess22() {
   num2 = 2;
}

function inputGuess23() {
   num2 = 3;
}
function inputGuess31() {
    num3 = 1;
}

function inputGuess32() {
   num3 = 2;
}

function inputGuess33() {
   num3 = 3;
}

function clearGuess() {
    num1 = 0;
    num2 = 0;
    num3 = 0;
}

function resetGame() {
    location.reload();
}

function hint() {
    const para3 = document.createElement("p")
    if (guess < code) {
        para3.textContent = "Too low";
    } 
    if (guess > code) {
        para3.textContent = "Too high";
    }
    document.body.appendChild(para3);
}

function checkGuess() {
    const para = document.createElement("p");
    guess = num1.toString() + num2.toString() + num3.toString();
    if (guess == code) {
    para.textContent = "Congrats! Your guess of " + guess + " was right!";
    resetGame();
    } else {
        para.textContent = "Sorry! Your guess of " + guess + " was wrong!";
        timer--;
        timerDiv.innerHTML = timer;
        console.log(code);
        hint();
        clearGuess();
    }
    document.body.appendChild(para);
}

function guessLog() {
    guessIn.innerHTML = "Current Guess: " + num1 + num2 + num3;
}

function afterGuess() {
     if (num1 != 0) {
        if (num2 != 0) {
            if (num3 != 0) {
                checkGuess();
            }
        }
     }
}

function timeCheck() {
    if (timer == 0) {
        const para2 = document.createElement("p");
        para2.textContent = "The police have caught you!"
        document.body.appendChild(para2);
    }
}

const button = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener("click", checkGuess());
    button.addEventListener("click", afterGuess());
    button.addEventListener("click", clearGuess());
    button.addEventListener("click", guessLog());
    button.addEventListener("click", timeLoss());
    button.addEventListener("click", timeCheck());
}


for (const button of buttons) {
    button.addEventListener("click", checkGuess());
}
