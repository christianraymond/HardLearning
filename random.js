var input = prompt("Please type a number");
var firstTypedNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * firstTypedNumber) + 1;
var message = "<p> " + randomNumber + " is a number between 1 and " + firstTypedNumber + "<p>";
document.write(message);


//The code bellow does the same thing but +1more lines than the above.
//Feel free to comment about these lines of code, i will appreciate it.


  var input = prompt("Please type a starting number");
  var bottomNumber = parseInt(input);
  var topNumber = parseInt(input);
  var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
  var message = "<p> " + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + "<p>";
  document.write(message);
