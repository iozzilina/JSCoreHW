// Write a JS function to print a figure of 4 squares of size n like shown in the examples below.
// The input is an integer number n in the range [2 … 200].
// The output consists of n lines for odd n and n-1 lines for even n. 
// Each line holds 2*n-1 characters (+ or | or space) as shown in the examples. 
// The figure is fully symmetric (horizontally and vertically).

// 4	
// +--+--+
// +--+--+
// +--+--+

// 7	
// +-----+-----+
// |     |     |
// |     |     |
// +-----+-----+
// |     |     |
// |     |     |
// +-----+-----+

function drawSquare(n){
    let rows = n%2 == 0 ? n-1 : n;
    let fillCount = (2*n-4)/2;
    let middle = Math.floor(rows/2)+1;

   //console.log(middle);

    for (let i = 1; i<=rows; i++ ){
        if(i===1 || i === middle || i === rows){
            console.log(`+${'-'.repeat(fillCount)}+${'-'.repeat(fillCount)}+`);
        }
        else{
            console.log(`|${' '.repeat(fillCount)}|${' '.repeat(fillCount)}|`);
        }
    }
    
}

drawSquare(5);



