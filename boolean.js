var ships = 10;
var score = 0;
if (  ships > 10 || score === 0 ) {
  console.log('Game over.');
}  else {
  console.log('Your score is zero.');
}

// The code bellow woks good in a browser console(Ctr+Shift+I)for linux user
//Change this code so that ("It's Friday, but I don't have enough money to go out") pass.
 var money = 9;
var today = 'Friday'

if ( money >= 100 || today === 'Friday' ) {
  alert("Time to go to the theater");
} else if ( money >= 50 || today === 'Friday' ) {
  alert("Time for a movie and dinner");
} else if ( money > 10 || today === 'Friday' ) {
  alert("Time for a movie");
} else if ( today !== 'Friday' ) {
  alert("It's Friday, but I don't have enough money to go out");
} else {
  alert("This isn't Friday. I need to stay home.");
}
