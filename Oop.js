// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}


function makeGame(upperbound) {
  var obj = {}

  obj.upper = upperbound
  obj.rand = randInt(upperbound)
  obj.counter = 0
  obj.guessMyNumber = guessMyNumber
  obj.giveUp = giveUp
  obj.numOfGuesses = numOfGuesses

  return obj
}

var guessMyNumber = function(n){
      this.counter++;
      if (n > this.upper) {
        return "Out of bounds! Please try a number between 0 and " + this.upper + ".";
      } else if (n === this.rand) {
        return "You guessed my number!";
      }
      return "Nope! That wasn't it!";
    }

var giveUp = function(){
      return this.rand;
    }

var numOfGuesses = function(){
      return this.counter;
    }