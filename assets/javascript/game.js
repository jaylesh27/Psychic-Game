var compOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
				   "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
				   "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = null;


//stores user's input in var userGuess
document.onkeyup = function(event) {
	var userGuess = event.key;
	guessesLeft--;
}

//document.getElementById("#guesses-left").innerHTML = "Guesses left: " + guessesLeft;

//picks random letter from compOptions array and stores it in compGuess array
var compGuess = compOptions[Math.floor(Math.random()*compOptions.length)];

function resetGame() {
	guessesLeft = 0;
	guessedLetters = null;
}


if (userGuess === compGuess) {
	wins++;
}else if (userGuess != compGuess) {

}