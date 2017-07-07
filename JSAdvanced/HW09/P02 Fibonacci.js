/*
Write a JS function that when called, returns the next Fibonacci number, 
starting at 0, 1. Use a closure to keep the current number.

Input
There will be no input.

Output
The output must be a Fibonacci number.

let fib = getFibonator();
fib(); // 1
fib(); // 1
fib(); // 2
fib(); // 3
fib(); // 5
fib(); // 8
fib(); // 13
*/


///*
let fib = (function (){

    let n1 = 1;
    let n2 = 1;

    return function fib(){
                   
        console.log(n1);        
        let result = n1+n2;
        n1=n2;
        n2=result;
        
    };  
})();

fib();
fib();


//*/


/*
function solve(){
    let firstNum = 0;
    let secondNum = 1;

    return function (){
        let thirdNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = thirdNum;

        return firstNum;
    }
}


let fib = solve();

fib();

*/
