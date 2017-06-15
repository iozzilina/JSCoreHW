// You will be given a text as a string. 
// Write a JS function that extracts and prints only the text that’s surrounded by parentheses.
// The input comes as a single string argument.
// The output is printed on the console on a single line, in the form of a comma-separated list.
//
// Input
// 'Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'
// Output
// Bulgarian brandy, alcoholic drink

function extractText(text){

    let results = [];

    let openIndex = text.indexOf('(');
    let closeIndex = text.indexOf(')', openIndex+1);

    while(openIndex !==-1 && closeIndex!== -1){
        results.push(text.substring(openIndex+1,closeIndex));

        openIndex = text.indexOf('(', closeIndex+1);
        closeIndex = text.indexOf(')', openIndex+1);
    }
        
    console.log(results.join(', '));
}


extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');