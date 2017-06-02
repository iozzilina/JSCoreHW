// Write a JS function that prints the two smallest elements from an array of numbers.
// The input comes as array of number elements.
// The output is printed on the console on a single line, separated by space.

// Input	            Output
// [30, 15, 50, 5]      5 15
// [3, 0, 10, 4, 7, 3]	0 3

function printTwoSmallest(arr){

    let result = arr.sort((a,b)=>a-b).slice(0,2); //i really dont get this lambda...

    return result.join(' ');
}

printTwoSmallest([30, 15, 50, 5]);
printTwoSmallest([3, 0, 10, 4, 7, 3]);