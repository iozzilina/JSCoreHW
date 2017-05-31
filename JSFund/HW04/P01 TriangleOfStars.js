// Write a JS function that outputs a triangle made of stars with variable size, depending on an input parameter. Look at the examples to get an idea.
// The input comes as a single number argument.
// The output is a series of lines printed on the console, forming a triangle of variable size.


function drawTriangle(count){

    for(let i = 1; i <=count; i++){
        printStars(i);
    }

    for(let i = count-1; i >=1; i--){
        printStars(i);
    }
    

    function printStars(n){
        console.log('*'.repeat(n));
    }


}

drawTriangle(10);