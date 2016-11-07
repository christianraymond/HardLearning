function taxi(passengers){
  if(passengers < 15){
    alert("Wait for the taxi to be full!");
  }
  else if(passengers <= 15){
    alert("Ride the taxi, find more passengers along the road!");
  }
  else{
    alert("Taxi is full, No more space for more passengers!");
  }
};
console.log(taxi(16));
