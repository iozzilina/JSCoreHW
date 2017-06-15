// Write a JS function that checks if a given matrix of numbers is magical. 
// A matrix is magical if the sums of the cells of every row and every column are equal. 

// The input comes as an array of arrays, containing numbers (number 2D matrix). 
// The input numbers will always be positive.

// The output is a Boolean result indicating whether the matrix is magical or not.

function isMatrixMagic(arr){

    let matrix = fillMatricWArrays(arr);

    //console.log(matrix);
    //printMatrix(matrix);
    let sum = matrix[0].reduce((a,b)=>a+b);

    //console.log(sum);

    //check row sums
    for(i=1;i<matrix.length;i++){
        if(matrix[i].reduce((a,b)=>a+b)!=sum){
            console.log('false');
            return;            
        }
    }

    //check col sums
    for(i=0;i<matrix[0].length;i++){
        sumCol = 0;
        for(j=0;j<matrix.length;j++){
            sumCol+=matrix[j][i];
        }

        if(sumCol!=sum){
            console.log('false');
            return;
        }
    }

    console.log('true');

    function fillMatricWArrays(arr){
        let result = [];          
        for (let  i = 0; i<arr.length; i++){
         result.push(arr[i].map(Number));
        }
        return result;
    }

    function printMatrix(myMatrix){
       let result = myMatrix.map(row=>row.join(' ')).join('\n');  
       console.log(result);
    }
}


isMatrixMagic([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
isMatrixMagic([[4, 5, 6], [6, 5, 4], [5, 1, 5]]);