var itemToBuy = '';
var savings = 1000;
if ( savings > 500 ) {
  itemToBuy = 'Computer';
} else if ( savings > 200 ) {
 itemToBuy = 'Phone';
} else if ( savings > 0 ) {
 itemToBuy = 'Dinner';
} else {
 itemToBuy = '...still saving...';
}
