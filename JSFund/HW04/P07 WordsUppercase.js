// Write a JS program that extracts all words from a passed in string and converts them to upper case. 
//The extracted words in upper case must be printed back on a single line concatenated by “, “.
// The input comes as a single string argument - the text from which to extract and convert the words.
// The output should be a single line containing the converted string.

//'Hi, how are you?'	HI, HOW, ARE, YOU
//'hello'	HELLO

//•	You may need to use a Regular Expression or alternatively check for all delimiters that can be found in a sentence 
//(ex. “,”, “ “, “!”, “?” and so on).

function convertSentence(str){
    let strUpper = str.toUpperCase();
    let words = extractWords();
    words = words.filter(w=>w!='');

    return words.join(", ");

    function extractWords(){return strUpper.split(/\W+/);}
}

convertSentence('Hi, how are you?');