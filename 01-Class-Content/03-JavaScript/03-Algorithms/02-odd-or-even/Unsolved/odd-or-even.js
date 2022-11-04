// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function(num) {
    if (typeof num === 'number') {
        return num % 2 === 0 ? 'even' : 'odd';
    }
    else {
        throw new Error('Sorry you didn\'t provide a number');
    }
};



function anotherFunction() {
    oddOrEven(45);
    // Do more here....
}

anotherFunction();