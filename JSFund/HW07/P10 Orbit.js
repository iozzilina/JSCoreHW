// You will be given an empty rectangular space of cells. 
// Then you will be given the position of a star. 
// You need to build the orbits around it.
// You will be given a coordinate of a cell, which will always be inside the matrix, 
// on which you will put the value – 1. 
// Then you must set the values of the cells directly surrounding that cell, including the diagonals,
//  to 2. After which you must set the values of the next surrounding cells to 3 and so on. 
// Check the pictures for more info.

// input 
// [4, 4, 0, 0]
// output
// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4

function orbit(numArr){
    let [r,c,x,y] = numArr.map(Number);

    let matrix = [];

    //fill matrix with 0's
    for(let i=0; i<r;i++){
        matrix.push('0'.repeat(c).split('').map(Number));
    }
        
    //set starting value on given coords      
    matrix[x][y]=1;  

    let counter = 1; 

    while(true){    
        //console.log(counter);   
        let isFilled = false;
        let startRow = Math.max(0,x-counter);
        let endRow = Math.min(r-1,x+counter);
        let startCol = Math.max(0,y-counter);
        let endCol = Math.min(c-1,y+counter);        

        for(let row = startRow; row<= endRow; row++){
            for(let col = startCol; col<=endCol; col++){
                if(matrix[row][col]===0){
                    matrix[row][col]=counter+1;
                    isFilled = true;
                }
            }
        }

        counter++;

        if(!isFilled){
            break;
        }       
    }

    printMatrix(matrix);

    function printMatrix(myMatrix){
       let result = myMatrix.map(row=>row.join(' ')).join('\n');  
       console.log(result);
    }
}

//orbit([4, 4, 0, 0]);
//orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);

    // function isFilled(matrix){
    //     for(row=0;row<matrix.length;row++){
    //         for(col=0;col<matrix[row].length;col++){
    //             if(matrix[row][col]===0){
    //                 return false;
    //             }
    //         }
    //     }
    //     return true;
    //}