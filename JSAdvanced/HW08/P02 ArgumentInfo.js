/*

Write a function that displays information about the arguments which are 
passed to it – type and value – and a summary about the number of each type.

Input
You will receive a series of arguments passed to your function.

Output
Log to the console the type and value of each argument passed in the following format:
{argument type}: {argument value}

Place each argument description on a new line. 
At the end print a tally with counts for each type in descending order,
each on a new line in format {type} = {count} If two types have the same count, use order of appearance. 
Don’t print anything for types that do not appear in the list of arguments.

Sample Input
result('cat', 42, function () { console.log('Hello world!'); });

Output
string: cat
number: 42
function: function () { console.log('Hello world!'); }
string = 1
number = 1
function = 1

*/

function result(){

    let summary = [];

    for(let i = 0; i<arguments.length; i++){
        let argumentValue = arguments[i];
        let argumentType = typeof(argumentValue);

        console.log(`${argumentType}: ${argumentValue}`);

        if(!summary[argumentType]){
            summary[argumentType]=1;
        } else {
            summary[argumentType]++;
        }       
    }

    //console.log(summary);

    //prep for sorting
    let typesToSort=[];
    for(let currentType in summary){
        typesToSort.push([currentType,summary[currentType]]);
    }

    //console.log(typesToSort);

    //sort summary
    let sortedTypes =[];
    sortedTypes = typesToSort.sort((a,b)=>b[1]-a[1]);

    //print summary
    for(let item of sortedTypes){
        console.log(`${item[0]} = ${item[1]}`)
    }

}

result('cat', 42, 430, 'cat', function () { console.log('Hello world!'); });

