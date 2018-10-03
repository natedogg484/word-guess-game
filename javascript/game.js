console.log("this is working")
// writing to html beginning //
var remainderText = document.getElementById("remainder")
var wordText = document.getElementById("word")
var guessedText = document.getElementById("guessed")
console.log(remainderText)
// what will be the counter for remaining letter guesses (half the alphabet should be enough) //
var remainingGuesses = 13;

// array of words to guess //
var words = [
    "Mozart",
    "Beethoven",
    "Chopin",
    "Bach",
    "Tchaikovsky",
    "Vivaldi"
];

// randomizes word selection from list //
var word = words[Math.floor(Math.random() * words.length)];

// represents word with the underlined section; need to add to html somehow (use id) //
var answers = [];
for (var i = 0; i < word.length; i++) {
    answers[i] = "_";
};


//beginning of loop and key input area//
//game ending when there are no letter left to guess or all guesses are gone//


document.onkeyup = function (event) {

    var userGuess = event.key;
    remainingGuesses--;
    if (remainingGuesses === 0) {

    };
    for (var j = 0; j < word.length; j++) {
        if (word[j] === userGuess) {
            answers[j] = userGuess;
        };
    };
};
remainderText.textContent = remainingGuesses;



