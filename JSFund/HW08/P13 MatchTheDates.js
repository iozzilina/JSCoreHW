// Write a JS function that finds and extracts all the dates in the given sentences. 
// The dates should be in format 
// d-MMM-yyyy. Example: 12-Jun-1999, 3-Dec-2017.
//
// The input comes as an array of strings. Each string represents a sentence.
//
// The output should be printed on the console. The output should consist of all extracted VALID dates. 
// Each element should be printed on a new line.
// 
// Input
// I am born on 30-Dec-1994.
// This is not date: 512-Jan-1996.
// My father is born on the 29-Jul-1955.
// 
// Output
// 30-Dec-1994 (Day: 30, Month: Dec, Year: 1994)
// 29-Jul-1955 (Day: 29, Month: Jul, Year: 1955)

//does not work on judge, does not like "match"
function findDates(text){
    let dateRegex = /\b\d{1,2}-\w{3}-\d{4}\b/g;
    matches = text.match(dateRegex);

    for(let date of matches){
        let parts = date.split('-');
        console.log(`${date} (Day: ${parts[0]}, Month: ${parts[1]}, Year: ${parts[2]})`);
    }
}

function findDatesWGroups(text){
    let dateRegex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;    
    let result = dateRegex.exec(text);

    while(result !== null){
        console.log(`${result[0]} (Day: ${result[1]}, Month: ${result[2]}, Year: ${result[3]})`);
        result = dateRegex.exec(text);
    }
}


//findDates('I am born on 30-Dec-1994. This is not date: 512-Jan-1996. My father is born on the 29-Jul-1955.');
findDatesWGroups('I am born on 30-Dec-1994. This is not date: 512-Jan-1996. My father is born on the 29-Jul-1955.');