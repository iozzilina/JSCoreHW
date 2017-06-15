// Write a JS function that reads a given matrix of numbers, 
// and checks if both main diagonals have equal sum. 
// If they do, set every element that is NOT part of the main diagonals to that sum, 
// alternatively just print the matrix unchanged.
//
// The input comes as array of strings. Each element represents a string of numbers, 
// with spaces between them. Parse it into a matrix of numbers, so you can work with it.
//
// The output is either the new matrix, with all cells not belonging to a main diagonal
// changed to the diagonal sum or the original matrix, 
// if the two diagonals have different sums. You need to print every row on a new line, 
// with cells separated by a space. Check the examples below. 

function attack(args){

    let matrix = [];
    
    //fill matrix with given values
    for (let  i = 0; i<args.length; i++){
        matrix.push(args[i].split(' ').map(Number));
    }

    function printMatrix(myMatrix){
       let result = myMatrix.map(row=>row.join(' ')).join('\n');  
       console.log(result);
    }

    function findPrimaryDiagonalSum(myMatrix){
        let n = myMatrix.length;
        let diag1 = 0;
            for(let row = 0; row<n;row++){
                diag1 += myMatrix[row][row];                
            }
        return diag1;
    }

    function findSecondaryDiagonalSum(myMatrix){
        let n = myMatrix.length;
        let diag2 = 0;
            for(let row = 0; row<n;row++){
                diag2 += myMatrix[row][n-1-row];                
            }
        return diag2;
    }

    //printMatrix(matrix);

    let primaryDiagonal = findPrimaryDiagonalSum(matrix);
    let secondaryDiagonal = findSecondaryDiagonalSum(matrix);

    if(primaryDiagonal===secondaryDiagonal){
        for(let  row = 0; row<matrix.length;row++){
            for (let col = 0; col<matrix[row].length; col++){
                if (row === col || col === matrix[row].length-1-row){
                    continue;
                }
                matrix[row][col]=primaryDiagonal;
            }
        }
    }
  
    printMatrix(matrix);
}

//attack(['5 3 12 3 1','11 4 23 2 5','101 12 3 21 10','1 4 5 2 2','5 22 33 11 1']);

attack(['1 1 1','1 1 1','1 1 0']);
