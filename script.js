// An array of the alphabet
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Variables to hold game score, guesses, etc.
var wins = 0;
var losses = 0;
var guesesLeft = 9;
var guessesSoFar = [];
var computerGuess;
// Computer's guess
function changeCompGuess() {
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};
changeCompGuess();
console.log("computerGuess: " + computerGuess)

// Begins the game function
document.onkeyup = function(event) {

  // Only accept key presses in alphabet
  var userGuess = event.key;
  var userGuess = userGuess.toLowerCase()
  if (computerChoices.indexOf(userGuess) >= 0) {
    if (guessesSoFar.indexOf(userGuess) < 0) {
      guessesSoFar.push(userGuess);

      //Game logic
      if (userGuess === computerGuess) {
        wins++;
        guesesLeft = 9;
        guessesSoFar = [];
        changeCompGuess();
        console.log("computerGuess: " + computerGuess)
      }
      else if (userGuess != computerGuess && guesesLeft > 1) {
        guesesLeft--;
      }
      else if (userGuess != computerGuess && guesesLeft == 1) {
        losses++;
        guesesLeft = 9;
        guessesSoFar = [];
        changeCompGuess();
        console.log("computerGuess: " + computerGuess)
      }

      //logging guesses
      console.log("userGuess: " + userGuess)
      
      //Updating the game id
      var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guesesLeft + "</p>" +
        "<p>Guesses So Far: " + guessesSoFar + "</p>";

      document.querySelector("#game").innerHTML = html;
       };
    };
  };