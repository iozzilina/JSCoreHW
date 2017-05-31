// Write a JS function that outputs a rectangle made of stars with variable size, depending on an input parameter. If there is no parameter specified, the rectangle should always be of size 5. Look at the examples to get an idea.
// The input comes as a single number argument.
// The output is a series of lines printed on the console, forming a rectangle of variable size


function drawSquare(count=5){

    for(let i = 1; i<=count; i++){
        printStars(count);
    }


    function printStars(n){
        console.log('*'+' *'.repeat(n-1));
    }
}

drawSquare(5);