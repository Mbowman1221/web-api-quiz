var comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
var arithmaticOperators = ["+", "-", "%"];
var logicalOperators = ["and", "or", "not"];
var myString = "Hello String";

//Array Methods
// Sorts comparisonOperators array and returns the sorted array
comparisonOperators.sort(); 

//Logs sorted array
console.log(comparisonOperators);

// Adds elements to end of an array. Takes in at least one parameter
var modulas = arithmaticOperators.pop(); 
var modulas = arithmaticOperators.push("%");

// console.log(modulas);
//Logs array with element "%" added to end
console.log(arithmaticOperators);

//Returns selected elements as a new array.
var logicalOperatorsSliced = logicalOperators.slice(0,3);

//Logs new array
console.log('logicalOperatorsSliced:',logicalOperatorsSliced);

// The orginal array is unchanged
console.log('logicalOperators: ', logicalOperators);

//String Methods
//Replaces "String" with "World" and returns new string
var myNewString = myString.replace("String", "To The World");
console.log(myNewString);

//The orginal string is unchanged
console.log(myString);
