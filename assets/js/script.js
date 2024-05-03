//wait for the DOM to finish loading before running the game
//get the button element and add event listener to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = dosument.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === submit){
                alert("You clicked submit!");
            }else{
                let gametype = this.getAttribute("data-type");
                alert(`You clicked ${gametype}.`);
            }
        })

        
    }
})

//**
/* The main game "loop", calles when the script is first loaded
* and after the "user's" answer has been processed
*/
function runGame(){

// creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25) +1;
    let num2 = Math.floor(Math.random()*25) +1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){
    
}