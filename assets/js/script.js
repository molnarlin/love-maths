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

function runGame(){

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