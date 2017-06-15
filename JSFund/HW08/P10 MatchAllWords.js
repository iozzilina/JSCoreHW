// Write a JS function that matches all words in a text, a word is anything that consists of letters, 
// numbers or underscores (_).
// The input comes as single string argument – the text from which to extract the words.
// The output should be printed on the console and should consist of all words concatenated
// with a “|“(pipe), check the examples bellow to better understand the format.

// Input
// 'A Regular Expression needs to have the global flag in order to match all occurrences in the text'
// Output
// A|Regular|Expression|needs|to|have|the|global|flag|in|order|to|match|all|occurrences|in|the|text

function matchAllWords(text){
    //let regex = new RegExp(`\b[a-zA-Z_]+\b/g`);

    let regex = /\w+/g;

    let wordArray = text.match(regex);    

    console.log(wordArray.join('|'));
}


matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');