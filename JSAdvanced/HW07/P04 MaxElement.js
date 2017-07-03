/*
Write a JS program that takes an array of numeric elements as input and 
returns the largest element of the array.

Input
You will receive an array of numbers.

Output
The output should be the return value of your function.
It represents the largest element of the array.
*/

function findMax(arr){
    return Math.max.apply(null, arr);
}


console.log(findMax([10, 20, 5]));