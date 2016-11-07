var input = prompt("What is the weather today?");
  if(parseInt(input) < 20){
    alert('You choose ' + input + ' It is cold today!');
  }
  else if(parseInt(input) >= 21){
    alert('Hoha ' + input + 'degree, It must be hot that side');
  }
  else{
    alert('It\'s summer, in Cape Town, Type a number');
  }
  document.write = prompt("You've tried " + input + "Press ok to finish!");
