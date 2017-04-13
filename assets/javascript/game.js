
//Psuedocode:

// User makes a choice
// Computer makes a choice
// Capture those choices
// Compare choices and determine if it's a win
//		if it is a win, reset guessesLeft and guessedLetters
// 		if not, decrease guessesLeft by 1 and display userGuess on screen
// 	if guessesLeft reaches 0, increase losses by 1 and reset guessesLeft and guessedLetters





var compOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
				   "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
				   "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];


function resetGame() {
	guessesLeft = 9;
	guessedLetters = [];
}


document.onkeyup = function() {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("User guess: " + userGuess);
	var compGuess = compOptions[Math.floor(Math.random()*compOptions.length)];
	console.log("Computer guess: " + compGuess);

	if (userGuess == compGuess) {
	wins++;
	//console.log("Wins: " + wins);
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	resetGame();
	}else if (guessesLeft ==  0) {
		resetGame();
		losses++;
		//console.log("Losses: " + losses);
		document.getElementById("losses").innerHTML = "Losses: " + losses;
	}
	if (userGuess !== compGuess) {
	guessedLetters.push(userGuess);
	//console.log("Guessed letters: " + guessedLetters);
	document.getElementById("guessed-letters").innerHTML = "Guessed letters: " + guessedLetters;
	guessesLeft--;
	//console.log("Guesses Left: " + guessesLeft);
	document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;
	}
}









