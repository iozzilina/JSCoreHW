// You are given a text with numbers multiplied by * in format {num1} * {num2}. Your job is to extract each two numbers in the above format, multiply them and replace them with their product. The first number is integer, can be negative. The second number is integer or floating-point and can be negative. There could be whitespace around the “*” symbol.
// The input comes as a single string argument – the text holding the numbers.
// The output should be printed on the console – it consists of the same text with the multiplied numbers replaced by their product.

// Input
// My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).
// Output
// My bill: 5 (beer); 2.4 (kepab); -1 (deposit).


function multiply(text){

    let regex = /(-?[\d]+)\s*\*\s*([\d]\.[\d]*)/g;

    text = text.replace(/(-?[\d]+)\s*\*\s*(-?[\d]\.[\d]*)/g,mult);   

    function mult(match,p1,p2){
        //console.log(arguments);
        let product = Number(p1)*Number(p2);
        return product;
    }

    console.log(text);
}

multiply('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');
multiply('My bill: 2*2.50 (beer); 2* 1.20 (kepab); 2  * -0.5 (deposit).');