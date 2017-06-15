// Write a JS function that adds and removes numbers to / from an array. You will receive a command which can either be “add” or “remove”. 
// The initial number is 1. Each input command should increase that number, regardless of what it is.

// Upon receiving an “add” command you should add the current number to your array. 
// Upon receiving the “remove” command you should remove the last entered number, currently existent in the array.
// The input comes as array of strings. Each element holds a command. 
// The output is the array itself, with each element printed on a new line. In case of an empty array, just print “Empty”.

// Input	Output
		
// add     1
// add     2
// add     3
// add     4
	
function addRemoveElements(cmdArr){
    let result = [];
    let currElement = 1;

    for (let cmd of cmdArr) {
        if (cmd === 'add'){
            result.push(currElement);
            currElement++;
        }     
        if(cmd === 'remove'){
            result.pop();
            currElement++;
        }        
   }

   if(result.length==0){
       console.log("Empty");
       return;
    }

    for(let e of result){
    console.log(e);
    }
}

addRemoveElements(['add','add','add','add']);
addRemoveElements(['add','add','remove','add','add']);
addRemoveElements(['remove','remove','remove']);