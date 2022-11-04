// Fill in the body of each function with the code required

var add = function(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        throw new Error('the parameters are not a number');
    }
};

var subtract = function(num1, num2) {
    return num1 - num2;
};

var multiply = function(num1, num2) {
    return num1 * num2;
};

var divide = function(num1, num2) {
    return num1 / num2;
};
