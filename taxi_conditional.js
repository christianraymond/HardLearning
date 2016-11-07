function taxi(passengers){
  if(passengers < 15){
    return "Wait for the taxi to be full!";
  }
  else if(passengers <= 15){
    return "Ride the taxi, find more passengers along the road!";
  }
  else{
    return "Taxi is full, No more space for more passengers!";
  }
};
console.log(taxi(16));
