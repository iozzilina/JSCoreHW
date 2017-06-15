// Write a JS function that prints all the symbols of a string, each on a new line.
// The input comes as a single string argument.
// The output is printed on the console, each letter on a new line.

// 'Hello, World!'	
// str[0] -> H
// str[1] -> e
// str[2] -> l
// str[3] -> l
// str[4] -> o
// str[5] -> ,
// str[6] ->  
// str[7] -> W
// str[8] -> o
// str[9] -> r
// str[10] -> l
// str[11] -> d
// str[12] -> !


function printLetters(str){
    for(let i in str){
        console.log(`str[${i}] -> ${str[i]}`);
    }
}

printLetters('Hello, World!');