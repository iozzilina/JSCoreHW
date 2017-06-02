// Write a JS function that finds the number of equal neighbor pairs inside a matrix of 
// variable size and type (numbers or strings).
// The input comes as array of arrays, containing string elements (2D matrix of strings).
// The output is return value of you function. Save the number of equal pairs you find and return it.
/*
Input	                        Output
[['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']]	    1

[['test', 'yes', 'yo', 'ho'],
 ['well', 'done', 'yo', '6'],
 ['not', 'done', 'yet', '5']]	2

*/

function findNeighbours(matrix){
    let count = 0;

    let rows = matrix.length;
    let cols = matrix[0].length;

    //check verticals
    for(let r = 0; r<rows-1; r++){
        for(let c = 0; c<cols; c++){
            if(matrix[r][c] == matrix[r+1][c]){
                count++;
            }
        }
    }

    //check horizonals
    for(let r = 0; r<rows; r++){
        for(let c = 0; c<cols-1; c++){
            if(matrix[r][c] == matrix[r][c+1]){
                count++;
            }
        }
    }

    return count;
}

findNeighbours([['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']]	);

 findNeighbours([['test', 'yes', 'yo', 'ho'],
 ['well', 'done', 'yo', '6'],
 ['not', 'done', 'yet', '5']]);