/*

Write a closure that can create and modify objects. 
All created objects should be kept and be accessible by name. 
You should support the following functionality:

•	create <name> - creates an object with the supplied <name>
•	create <name> inherits <parentName> - creates an object with the given <name>, 
    that inherits from the parent object with the <parentName>
•	set <name> <key> <value> - sets the property with key equal to <key> to <value> 
    in the object with the supplied <name>.
•	print <name> - prints the object with the supplied <name> in the format 
    "<key1>:<value1>,<key2>:<value2>…" - the printing should also print all inherited 
    properties from parent objects. 
    Inherited properties should come after own properties.

Input
The input will come as an array of strings - each string represents a command to
be executed from your closure.

Output
For every print command - you should print on the console all properties of the object 
in the above mentioned format.

*/
function cmdProcessor(arr){
    
    let carProcessor = (function(){

        let objects = new Map();

        function create(name){
            objects.set(name,{});    
        }

        function inherit(name, parent){
            objects.set(name, Object.create(objects.get(parent)));
        }

        function set(objName, propName, propValue){
            objects.get(objName)[propName] = propValue;
        }

        function print(name){
            let current = objects.get(name);
            //let properties = Object.keys(current);
            //console.log(properties.map(k=>`${k}:${current[k]}`).join(', '));

            let props = [];
            for(let prop in current)
            {
                props.push(`${prop}:${current[prop]}`);
            }
            console.log(props.join(', '));
        }


        return {create, inherit, set, print};
    })();

    for(let cmd of arr){

        let [command, name, param, value] = cmd.split(' ');
        if(command === 'create'){
            if(param === 'inherit'){
                carProcessor.inherit(name,value);
                continue;
            }
            carProcessor.create(name);
        } else if(command ==='set'){
            carProcessor.set(name,param,value);
        } else if(command ==='print'){
            carProcessor.print(name);
        }

    }

};

cmdProcessor(
    ['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);




/// console.log(Object.getPrototypeOf(objects.get('c3')));


