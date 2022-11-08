'use strict';
// The default keyword "this" refers to the global object
// In a browser, the global object is the Window 

// Logs Window
console.log(this);

function thisContextInAFunction() {
  console.log('thisContextInAFunction', this);
}

// new thisContextInAFunction(); 

// When the keyword "this" is used inside of an object like planet, "this" belongs to that object
var planet = {
  name: "Earth",
  age: "4.543 billion years",
  isPopulated: true,
  population: "7.594 billion",
  subPlanet: {
    name: 'Alantis',
    population: '2000 people',
    generateAir: function() {
      console.log('This context in Alantis: ', this);
      console.log('Breath');
    }
  },
  logFacts: function () {
     //Logs "This planet's name is Earth"
     console.log('The this context of Earth is: ', this);
     console.log("This planet's name is " + this.name);
     //Logs "This planet's age is 4.543 billion years"
	 console.log("This planet's age is " + this.age);
  },
  logPopulation: function () {
    if (this.isPopulated) {
      // Logs "This planet's population is 7.594 billion"
	  console.log("This planet's population is " + this.population);
	} else {
	  console.log("The planet is unpopulated");
	}   
  }
};

// Calls object methods
planet.logFacts();
planet.logPopulation();

planet.subPlanet.generateAir();
