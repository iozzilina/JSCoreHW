// Write a JS program that modifies a number until the average value of all of its digits is higher than 5. In order to modify the number, your program should append a 9 to the end of the number, when the average value of all of its digits is higher than 5 the program should stop appending. If the number’s average value of all of its digits is already higher than 5, no appending should be done.
// The input is a single number.
// The output should consist of a single number - the final modified number which has an average value of all of its digits higher than 5. The output should be printed on the console.
// Constraints
// •	The input number will consist of no more than 6 digits.
// •	The input will be a valid number (there will be no leading zeroes).
//
//101	1019999
//5835	5835



function modifyNumber(num){

    let numAsStr = num.toString();
    
    let sum = sumDigits(numAsStr);
    while(sum / numAsStr.length <=5 ){
        numAsStr+='9';
        sum = sumDigits(numAsStr);
    }

    console.log(numAsStr);

    function sumDigits(numAsStr){
        let sum = 0;
        for(let digit of numAsStr){
            sum+= Number(digit);
        }

        return sum;
    }
}

modifyNumber(101);
modifyNumber(5835);