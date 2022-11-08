// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function (num) {
    // for (let index = 0; index <= num; index++) {
    //     if (index % 2 === 0) {
    //         console.log(index);
    //     }
    // }
    for (let index = 0; index <= num; index += 2) {
            console.log(index);
    }
};

logEvenNums(13);
