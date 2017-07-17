/*

Write a JS function which receives a class and attaches to it a property species and a function toSpeciesString(). 
When called, the function returns a string with format:

I am a <species>. <toString()>

The function toString is called from the current instance (call using this).

Input
Your function will receive a class whose prototype it should extend.

Output
There is no output, your function should only attach the properties to the given class’ prototype.

Example
template.js
function extendClass(classToExtend) {
    //TODO
}
 */

class Person{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    toString(){
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

function extendClass(classToExtend) {

    classToExtend.prototype.species = 'Human';        
    classToExtend.prototype.toSpeciesString = function()
    {
         return `I am a ${this.species}. ${this.toString()}`;
    }
}


extendClass(Person);
let gosho = new Person('gosho','email@soemthing.com');
console.log(''+gosho);
console.log(gosho.toSpeciesString());
