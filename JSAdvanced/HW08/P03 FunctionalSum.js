/*
Write a function that adds a number passed to it to an internal sum 
and returns itself with its internal sum set to the new value, so it can be chained in a functional manner. 

Example
Sample Input	                Sample Output
console.log(add(1));	        1
console.log(add(1)(6)(-3));	    4

Input
Your function needs to take one numeric argument.

Output
Your function needs to return itself with updated context.
*/

let iife = (function (){

    let sum  = 0; //hide variable and keep state

    return function add(number){
        sum+=number;
        add.toString = function (){
            return sum;
        };
        return add;
    };


})();


console.log(add(1));
console.log(add(1)(6)(-3).toString());	