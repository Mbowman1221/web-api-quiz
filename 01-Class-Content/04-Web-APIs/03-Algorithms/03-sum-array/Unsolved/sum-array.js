// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    // [4, 78, 20, 45] potential structure of arr
    var result = 0;

    for (var index = 0; index < arr.length; index++) {  
        result += arr[index];
    }

    return result;
};
