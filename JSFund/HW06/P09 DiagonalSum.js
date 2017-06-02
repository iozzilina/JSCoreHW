// A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). 
//Write a JS function that finds the sum at the main and at the secondary diagonals.
// The input comes as array of arrays, containing number elements (2D matrix of numbers).
// The output is printed on the console, on a single line separated by space. 
//First print the sum at the main diagonal, then the sum at the secondary diagonal.

// Input	        Output
// [[20, 40],
//  [10, 60]]	    80 50

// [[3, 5, 17],
//  [-1, 7, 14],
//  [1, -8, 89]]	99 25


function diagonalSums(matrix){
    
    //let numMatrix = matrix.map(Number);
    let numMatrix = matrix;

    let n = numMatrix.length;
    let diag1 = 0, diag2 = 0;

    for(let row = 0; row<n;row++){
        diag1 += numMatrix[row][row];
        diag2 += numMatrix[row][n-1-row];
    }

    return `${diag1} ${diag2}`;
}

diagonalSums([[20, 40], [10, 60]]);
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);