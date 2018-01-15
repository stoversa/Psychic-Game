// Game components reside here
var pgame = {
  // An array of the alphabet
  computerChoices: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  // Variables to hold game score, guesses, etc.
  wins: 0,
  losses: 0,
  guesesLeft: 9,
  guessesSoFar: [],
  computerGuess: '',
  userGuess: '',
  
  // Computer's guess
  changeCompGuess: function () {
    pgame.computerGuess = pgame.computerChoices[Math.floor(Math.random() * pgame.computerChoices.length)];
  },

  //Game logic itself
  gameLogic: function () {
      if (pgame.computerChoices.indexOf(pgame.userGuess) >= 0) {
        if (pgame.guessesSoFar.indexOf(pgame.userGuess) < 0) {
          //Populate the guessess so far array w/ user's guess
          pgame.guessesSoFar.push(pgame.userGuess);

          //if the user guesses the correct answer, this block runs
          if (pgame.userGuess === pgame.computerGuess) {
            pgame.wins++;
            pgame.guesesLeft = 9;
            pgame.guessesSoFar = [];
            pgame.changeCompGuess();
          }

          //if user guesses incorrectly, but still has more guesses
          else if (pgame.userGuess != pgame.computerGuess && pgame.guesesLeft > 1) {
            pgame.guesesLeft--;
          }

          //if user runs out of guesses, this block runs
          else if (pgame.userGuess != pgame.computerGuess && pgame.guesesLeft == 1) {
            pgame.losses++;
            pgame.guesesLeft = 9;
            pgame.guessesSoFar = [];
            pgame.changeCompGuess();
          }

          //Populates UI with the user's score
          var html =
            "<p>Wins: " + pgame.wins + "</p>" +
            "<p>Losses: " + pgame.losses + "</p>" +
            "<p>Guesses Left: " + pgame.guesesLeft + "</p>" +
            "<p>Guesses So Far: " + pgame.guessesSoFar + "</p>";

          document.querySelector("#game").innerHTML = html;
           };
        };
  },

  // Update the date
  updateDate: function(){
    var date = new Date();
    var thisDate = date.getFullYear();
    document.querySelector("#date").innerHTML = thisDate;
  }
};

// Onload functions pre-populate the computer's guess
window.onload = function() {
  pgame.updateDate();
  pgame.changeCompGuess();
};

// Begins the game when a key is pressed
document.onkeyup = function(event) {

  // Only accept key presses in alphabet
  pgame.userGuess = event.key;
  pgame.userGuess = pgame.userGuess.toLowerCase();
  pgame.gameLogic();

};