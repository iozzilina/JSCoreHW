// Write a JS function that prints a given array.
// The input comes as array of strings. The last element of the array is the delimiter.
// The output is the same array, printed on the console, each element separated from the others by the given delimiter.

// Input	
// One
// Two
// Three
// Four
// Five
// -	

// Output
// One-Two-Three-Four-Five

function printArray(arr){

    let delimiter = arr[arr.length-1];

    arr.pop(); //deletes the last element

    let result = arr.join(delimiter);

    return result;    
}

printArray(['One','Two','Three','Four','-']);
