// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// const ninja = 'Libby';
// setTimeout( function myCallbackFunction(){
  // console.log("LATER: ")
  // console.log(ninja, "LATER"); }, 2000
// );
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");

/******************************************************************/

// function doSomething(possibleCallback) {
  // if (typeof(possibleCallback) === 'function'){
    // console.log('possibleCallback is a callback!');
    // possibleCallback(); //we can invoke the callback!
  // }
  // else {
    // console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
  // }
// }
// doSomething(function myCallback(){ console.log('yes, I am a callback!') });
// doSomething('string');

/**********************************************************/
function makePasta(pasta, makeSauce) {
  console.log("Boiling water");
  console.log("Putting " + pasta + " pasta in the water");
  // create a variable for sauce!
  const sauce = makeSauce();          // invoke makeSauce, our callback
  console.log("Mixing sauce");
  console.log("Pasta is done!");
  return pasta + " Pasta with " + sauce + " sauce! Voila!";
}
function makePesto() {
  console.log("Making Pesto");
  return "pesto";
}
function makeAlfredo() {
  console.log("Making Alfredo");
  return "alfredo";
}
// we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makePesto)); 
// notice lack of parentheses after makePesto.
// Remember: we want to pass the function, not execute it and pass a return value.
console.log(makePasta("Farfalle", makeAlfredo));
/**********************************************************************/




function orderSupplies(item, callback) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;
  setTimeout(() => {
    warehouse = {
      paint: {
        product: 'Neon Green Paint',
        directions: () => 'mix it!'
      },
      brush: {
        product: 'Horsehair brush',
        directions: () => 'start painting!'
      }
    };
    callback(warehouse[item]);
  }, deliveryTime);
}
function receivedItem(item) {
  console.log(`Received ${item.product}, time to ${item.directions()}`);
}
orderSupplies('brush', receivedItem);
orderSupplies('paint', receivedItem);
