/*
Write a function that sorts an array with numeric values in ascending 
or descending order, depending on an argument that’s passed to it.

Input
You will receive a numeric array and a string as arguments to the first function in your code. 
If the second argument is asc, the array should be sorted in ascending order (smallest values first). 
If it is desc, then the array is sorted in descending order (largest first).

Output
The output should be the return value of your function and it is the sorted array.


Sample Input	Output
solve([14, 7, 17, 6, 8], 'asc');	

Output
[6, 7, 8, 14, 17]

*/


function sortArray(inputArr, sortMethod){
    
    let ascendingComparator = function (a,b){
        return a-b;
    };

    let descendingComparator = function (a,b){
        return b-a;
    };


    let sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };

    // calling the sorttingStrategies object with the 
    // sortMethod string returns the needed functions... 
    return inputArr.sort(sortingStrategies[sortMethod]);
}


console.log(sortArray([14, 7, 17, 6, 8], 'asc'));