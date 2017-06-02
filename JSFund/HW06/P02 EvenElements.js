// Write a JS function that finds the elements at even positions in an array.
// The input comes as array of string elements.
// The output is the return value of your function. Collect all elements in a string, separated by space.
// Examples

// Input	            Output		            Input	        Output
// ['20', '30', '40']	20 40		            ['5', '10']	    5

function findEvens(arr){
    let output = arr[0].toString();

    for(i = 2; i<arr.length;i+=2){
        output +=' '+arr[i];
    }

    return output;
}

findEvens(['20', '30', '40'])