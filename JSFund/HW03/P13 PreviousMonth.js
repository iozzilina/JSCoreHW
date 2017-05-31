// Write a JS function that receives a date as array of strings containing day, month and year in that order.
// Your task is to print the last day of previous month (the month BEFORE the given date). 
//Check the examples to better understand the problem.
// The input comes as an array of numbers.
// The output should be a single number representing the last day of the previous month.
//[17, 3, 2002]	    28
//[13, 12, 2004]	30

function lastDayOfLastMonth(params){
    let currDate = new Date(params[2],params[1]-1,1);

    let oneDay = 24*60*60*1000;

    let newDate = new Date(currDate-oneDay);

    return newDate.getDate();
} 


lastDayOfLastMonth([17, 3, 2002]);
lastDayOfLastMonth([13, 12, 2004]);