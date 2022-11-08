// Objects are a collection of properties
// var planet = [
//   {
//     // Properties are made up of key-value pairs
//     name: "Earth",
//     age: "4.543 billion years",
//     moons: 1,
//     isPopulated: true,
//     population: "7.594 billion"
//   },
//   {
//     name: "Mars",
//     age: "4.603 billion years",
//     moons: 3,
//     isPopulated: false,
//     population: '5 Robots'
//   }
// ];

var nextPlanet = new Object();

var myPopulationBoolean = 'isPopulated';

nextPlanet.name = 'Mars';

var planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet.name);

// Uses bracket notation and logs "Earth"
console.log(planet["name"]);

console.log("Value of moons on planet is: ", planet.moons);

console.log("planet['isPopulated']: ", planet['isPopulated']);

planet.name = "New Planet Earth";

console.log(planet.name);

console.log(typeof planet);

console.log(JSON.stringify(planet))
