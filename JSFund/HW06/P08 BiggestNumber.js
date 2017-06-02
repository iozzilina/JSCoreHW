// Write a JS function that finds the biggest element inside a matrix.
// The input comes as array of arrays, containing number elements (2D matrix of numbers).
// The output is the return value of your function. Find the biggest element and return it.

// Input	            Output
// [[20, 50, 10],
//  [8, 33, 145]]	    145

// [[3, 5, 7, 12],
//  [-1, 4, 33, 2],
//  [8, 3, 0, 4]]	    33


function findBiggest(matrix){

    let max = Number.NEGATIVE_INFINITY;

    matrix.forEach(row=>row.forEach(e=>{if (e>max){max=e}}));

    return max;

}


findBiggest([[20, 50, 10],[8, 33, 145]]);
findBiggest([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]]);