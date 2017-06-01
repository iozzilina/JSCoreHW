// Write a JS program that prints a DNA helix with length, specified by the user. 
//The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG.
// See the examples for more information.
// The input comes as a single number. It represents the length of the required helix.
// The output is the completed structure, printed on the console.

// 4	
// **AT**
// *C--G*
// T----T
// *A--G*

// 10	
// **AT**
// *C--G*
// T----T
// *A--G*
// **GG**
// *A--T*
// C----G
// *T--T*
// **AG**
// *G--G*


function dnaHelix(rows){
    let sequence = 'ATCGTTAGGG';
    let seqLen = sequence.length;
    let index = 0;

    for(let i = 1; i<=rows; i++){

        //console.log(index);
        let sym1 = sequence[nextIndex()];
        //console.log(sym1);
        //console.log(index);
        let sym2 = sequence[nextIndex()];
        //console.log(sym2);   

       if( i%4 === 1){
            console.log(`**${sym1}${sym2}**`);       
       }else if(i%4 === 2 || i%4 === 0){
           console.log(`*${sym1}--${sym2}*`);
       }else{
           console.log(`${sym1}----${sym2}`);
       }
    }


    function nextIndex(){    
        if(index >= seqLen){
            index = 0;
        }
        return index++;        
    }
}


dnaHelix(10);




