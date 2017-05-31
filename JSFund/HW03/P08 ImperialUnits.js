// Imperial units are confusing, but still in use in some backwards countries 
//(Myanmar, Liberia and the United States are the only countries still using them). 
//They are so confusing in fact, that native users struggle to convert between them. 
//Write a JS function that converts from inches to feet and inches. 
//There are 12 inches in a foot. See the example for formatting details.
// The input comes as a single number.
// The output should be printed to the console.

function inchesToFeet(dist){

    let feet = Math.floor(dist/12);
    let inches = dist%12;

    let result = `${feet}'-${inches}"`;

    return result;
}


inchesToFeet(36);
inchesToFeet(55);
inchesToFeet(11);
