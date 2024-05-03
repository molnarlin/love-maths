//wait for the DOM to finish loading before running the game
//get the button element and add event listener to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = dosument.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === submit){
                checkAnswer();
            }else{
                let gametype = this.getAttribute("data-type");
                runGame(gametype);
            }
        })

        
    }

    runGame("addition");

})

//**
/* The main game "loop", calles when the script is first loaded
* and after the "user's" answer has been processed
*/
function runGame(gametype){

// creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25) +1;
    let num2 = Math.floor(Math.random()*25) +1;

    if (gametype === "addition"){
        displayAdditionQuestion(num1, num2)
    }else{
        alert(`Unknown game type: ${gametype}`);
        throw `Unknown game type: ${gametype}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in 
 * the returned calculateCorrectAnswer array
 */
function checkAnswer(){
    let UserAnswer=parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect){
        alert("Hey! You got it right! :D");
    }else{
        alert(`Awwwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]} !`);
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus, etc)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer(){

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === "+"){
        return [operand1 + operand2, "addition"];
    }else{
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){
    
}