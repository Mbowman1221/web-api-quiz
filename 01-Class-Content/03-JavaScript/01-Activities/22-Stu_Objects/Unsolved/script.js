//WRITE YOUR CODE BELOW
var customerOrder = {
    drinkName: "Americano",
    numSugar: 3,
    isReady: false
}

console.log(customerOrder.drinkName)
console.log(customerOrder.numSugar)

if (customerOrder.isReady === true) {
    console.log("Ready for pick-up");
} else {
    console.log("Still in order queue")
}

// if (customerOrder.numSugar === 3) {
//     console.log("Ready for pick-up");
// } else {
//     console.log("Your order isn't ready")
// }
