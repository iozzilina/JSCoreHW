// Write a JS function that prints the first k and the last k elements from an array of numbers.
// The input comes as array of number elements.
// The first element represents the number k, all other elements are from the array that needs to be processed.
// The output is printed on the console on two lines. 
// On the first line print the first k elements, separated by space.
// On the second line print the last k elements, separated by space.

// Examples
// Input	Output		
// [2, 7, 8, 9]	 
// 7 8
// 8 9		

// [3, 6, 7, 8, 9]
// 6 7 8
// 7 8 9

function selectFromArray(arr){

    let k = Number(arr[0]);

    let firsts = arr.slice(1,k+1);
    let lasts = arr.slice(arr.length-k);

    console.log(firsts.join(' '));
    console.log(lasts.join(' '));

}


selectFromArray([2, 7, 8, 9]);
selectFromArray([3, 6, 7, 8, 9]);