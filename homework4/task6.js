let car = "audi";
let bike = "cannondale";

function log () {
  let bike = "specialized";
  car = "jeep";
  
  function inner () {
    let plane = "boeing";
    console.log(car); // jeep
    console.log(bike); // specialized
    console.log(plane); // boeing
  }
  console.log(inner); //function
  return inner; 
}

console.log(car); //audi
console.log(bike);//cannondale

var logger = log();
logger();

console.log(car); //jeep, because we rewrite car in 6 line
console.log(bike);//cannondale

inner();// error, because inner is underfined
