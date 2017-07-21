var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p1Display = document.getElementById("p1Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore= numInput.value;

// Adding event listener on button 1
p1Button.addEventListener("click", function(){

	if(!gameOver)
	{
		p1Score++;

		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;


		}
	p1Display.textContent = p1Score;

	}
});

// Adding event listener on button 2
p2Button.addEventListener("click", function(){

	if(!gameOver)
	{
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver= true;
		}
		p2Display.textContent = p2Score;

		}
});


// listening for click event on reset button
resetButton.addEventListener("click", function(){
	reset();
	reset1();

});


// defining function for reset
function reset(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver= false;

}

// defining function for clearing display score and input value
function reset1(){
	winningScoreDisplay.textContent = " ";
	numInput.value=" ";
}

// listening for change in input value(winning score)
numInput.addEventListener("change", function(){

	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});
