/*

Using a closure, create an inner object to process list commands. 
The commands supported should be the following:
•	add <string> - adds the following string in an inner collection.
•	remove <string> - removes all occurrences of the supplied <string> from the inner collection.
•	print - prints all elements of the inner collection joined by ", ".

Input
The input will come as an array of strings - each string represents a 
command to be executed from the command execution engine.

Output
For every print command - you should print on the console 
the inner collection joined by ", "

Input
['add hello', 'add again', 'remove hello', 'add again', 'print']

Output
again,again


*/

function processList(arr){

    
    let listProcessor = (function (){

        let list = [];

        function add(string){
            list.push(string);
        }


        function remove(string){
            list = list.filter(e=>e!==string);
        }

        function print(){
            console.log(list.join(','));
        }

        return {add,remove,print};
    })();


    for(let row of arr){
        let [command, string] = row.split(' ');

        listProcessor[command](string);

    }
}


processList(['add hello', 'add again', 'remove hello', 'add again', 'print']);
processList(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);