//Write a JS function that rounds numbers to specific precision.
//The input comes as an array of two numbers. 
//The first value is the number to be rounded and the second is the precision (significant decimal places). 
//If a precision is passed, that is more than 15 it should automatically be reduced to 15.
//The output should be printed to the console. 
//Do not print insignificant decimals.

function customRound(params){
    let n = params[0]; //number to round
    let p = params[1]<=15 ? params[1]: 15; //precision( decimal places) 15 is max

    //console.log(n);
    //console.log(p);

    let precision = Math.pow(10,p);
    let R = Math.round(n*precision)/precision

    console.log(R);
}

customRound([2.423543,432]);
customRound([2.423543,3]);
customRound([3.1415926535897932384626433832795, 2]);
customRound([10.5000, 3]);
