/* 
Revisit the problem Extensible Object from Object Composition. 
Refactor the code so that instead of a single instance, you deliver a class that can be extended. 
The class has an extend(template) method that would copy all of the properties of template to the instance 
(not to all instances, just the one from which the method was called) and if the property is a function, a
dd it to the object’s prototype instead.

In addition, the base class needs to have an ID property that is unique and autoincremented sequentally for every new instance.

Input / Output
The extend() function of your object will receive a valid object as input parameter, and has no output.
Structure your code as an IIFE that returns the class.


Sample Input                        Output
let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);               0
console.log(obj2.id);               1
console.log(obj3.id);               2


Extensible object
obj1: {
  __proto__: {
    extend: function () {…}
  },
  id: 0
}

Template object
template: {
  extensionMethod: function () {…},
  extensionProperty: 'someString'
}

Resulting object
myObj: {
  __proto__: {
    extend: function () {…},
    extensionMethod: function () {…}
  },
  id: 0,
  extensionProperty: 'someString'
} 

Hints
You may have to keep track of the last assigned ID in a closure that is accessible by the constructor. 
Constructor functions offer direct access to their prototypes – you can view and modify them with ClassName.prototype.

*/

let extensible = (function(){

    let id = 0;

    return class Extensible{

        constructor(){
            this.id = id++;
        }

        extend(template){
            for(let prop in template){
                if(template.hasOwnProperty(prop)){ //get obly the object properties, not the prototype
                    let element = template[prop];
                    //console.log(typeof element);
                    if(typeof element === 'function'){
                        Extensible.prototype[prop] = element;
                    } else {
                        this[prop] = element;
                    }
                }
            }
            //console.log(Extensible.prototype);
        }
    }

})();


//set up for local testing


let template = {
    newExtensionMethod  : function (){
        console.log('stamat');
    },
    newExtensionProperty : 'propertyName'
};


let obj1 = new extensible();
let obj2 = new extensible();
let obj3 = new extensible();

console.log(obj1.id);               
console.log(obj2.id);               
console.log(obj3.id);

console.log(obj1);
obj1.extend(template);
console.log(obj1);




