// You will be given a list of towns and incomes for each town, formatted in a table, separated by pipes (|).
// Write a JS function that extracts the names of all towns and produces a sum of the incomes. 
// Note that splitting may result in empty string elements and the number of spaces
// may be different in every table.

// The input comes as array of string elements. Each element is one row in a formatted table.

// The output is printed on the console on two lines. On the first line, 
// print a comma-separated list of all towns and on the second, the sum of all incomes.

// Input
// ['| Sofia           | 300',
//  '| Veliko Tarnovo  | 500',
//  '| Yambol          | 275']
// Output
// Sofia, Veliko Tarnovo, Yambol
// 1075

function townIncome(arr){
    let towns = [];
    let income = [];

    for(let line of arr){
        towns.push(line.split('|')[1].trim());
        income.push(line.split('|')[2].trim());
    }

    console.log(towns.join(', '));
    console.log(income.map(Number).reduce((a,b)=>a+b));
}

townIncome(['| Sofia           | 300', '| Veliko Tarnovo  | 500', '| Yambol          | 275']);