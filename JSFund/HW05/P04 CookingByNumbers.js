// Write a JS program that receives a number and a list of five operations. 
//Perform the operations in sequence by starting with the input number and 
//using the result of every operation as starting point for the next. 
//Print the result of every operation in order. The operations can be one of the following:
// •	chop – divide the number by two
// •	dice – square root of number
// •	spice – add 1 to number
// •	bake – multiply number by 3
// •	fillet – subtract 20% from number
// The input comes as an array of 6 string elements. 
//The first element is your starting point and must be parsed to a number. 
//The remaining 5 elements are the names of operations to be performed.
// The output should be printed on the console.

// [32, chop, chop, chop, chop, chop]
// 16
// 8
// 4
// 2
// 1

// [9, dice, spice, chop, bake, fillet]	
// 3
// 4
// 2
// 6
// 4.8

function cookByNumbers(arr){
    let start = arr[0];
    //console.log(start);
    
    let chop = function(a){
        return a/2;
    }

    let dice = function(a){
        return Math.sqrt(a);
    }

    let spice = function(a){
        return ++a;
    }

    let bake = function(a){
        return a*3;
    }

    let fillet = function(a){
        return a*0.8;
    }

    function selectOp(word){
        switch (word){
            case 'chop' : return chop; 
            case 'dice' : return dice;
            case 'spice' : return spice;
            case 'bake' : return bake;
            case 'fillet' : return fillet;

        }
    }

    function cook(num,operation){
        return operation(num);
    }


     for(i = 1; i<arr.length; i++){

        op = selectOp(arr[i].toLowerCase());
        //console.log(op);
        start = cook(start,op);
        console.log(start);
    }
   

}

cookByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cookByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);