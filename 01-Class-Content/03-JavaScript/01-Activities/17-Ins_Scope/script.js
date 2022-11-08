// A variable declared in global scope is available to all functions
var hello = "Hello"; 

console.log("I am a hello var on the window object: ", window.hello);

console.log(window);

function sayHello() {
  console.log(hello);
  return;
}

var sayHelloAgain = function () {
  console.log(hello);
  return;
};

sayHello();
sayHelloAgain();

//A variable declared in local scope is only available to that function
function sayGoodbye() { 
  var goodbye = "Goodbye";
  console.log(goodbye);
  return;
}

//This will throw an error
var sayGoodbyeAgain = function () { 
  console.log(goodbye);
  return;
};

// sayGoodbyeAgain();

// Shadowing happens when the same variable is used in the local and global scope
var shadow = "Hello Shadow";
 console.log(shadow);

// Logs "Hello"
function sayWhat() {
  console.log(shadow);
  return;
}

//Logs "Goodbye"
var sayWhatAgain = function () {
  var shadow = "Goodbye Shadow";
  console.log(shadow);   
};

sayGoodbye();
sayWhat();
sayWhatAgain();
