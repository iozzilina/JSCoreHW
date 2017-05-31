// Write a JS program that receives two variables and an operator and performs a calculation between the variables, using the operator. Store the different functions in variables and pass them to your calculator.
// The input comes as three arguments – two numbers, and a string, representing the operator.
// The output should be printed on the console.

//2, 4, '+'	6
//3, 3, '/'	1
//18, -1, '*'	-18

function calculate(a, b, op){

    function doIt(a,b,operation){
        return operation(a,b);
    }

    let add = function(a,b){
        return a+b;
    }

    let subtract = function(a,b){
        return a-b;
    }

    let multiply = function (a,b){
        return a*b;
    }

    let divide = function(a,b){
        return a/b;
    }

    switch (op){
        case '+' : return doIt(a,b,add);
        case '-' : return doIt(a,b,subtract);
        case '*' : return doIt(a,b,multiply);
        case '/' : return doIt(a,b,divide);
    }

}
