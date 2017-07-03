/*
Write a JS program that keeps a string inside it’s context and can execute different 
commands that modify or output the string on the console.

append(str) – add str to the end of the internal string
removeStart(n) – remove the first n characters from the string, n is an integer
removeEnd(n) – remove the last n characters from the string, n is an integer
print – output the stored string to the console

Input
You will receive an array of strings. Each element is a command that may be a single word 
or contain an argument, separated by space.

Output
Whenever you receive the command print, output should be the printed on the console. 
Any other operations are carried onto the internal storage of the function.

Examples

Sample Input	

['append hello',
 'append again',
 'removeStart 3',
 'removeEnd 4',
 'print']	

 Output
 loa

*/
function solve(commands){

    let processor = (function(){
        let text = '';    

        return function processor(commandString){
            let commandTokens = commandString.split(' ');

            switch (commandTokens[0]){
                case 'append':
                    text+=commandTokens[1];
                    break;
                case 'removeStart':
                    text = text.slice(Number(commandTokens[1]));
                    break;
                case 'removeEnd':
                    text = text.slice(0,text.length-Number(commandTokens[1]));
                    break;        
                case 'print':
                    console.log(text);
                    break;
            }
        }
    })();

    for(let commandString of commands){
        processor(commandString);
    }
}

