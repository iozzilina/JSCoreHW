/*
Create an object that can clone the functionality of another object into itself. 
Implement an extend(template) function that would copy all of the properties of template to the parent
object and if the property is a function, add it to the object’s prototype instead.

Input / Output

Your code should return the extensible object instance. 
The extend() function of your object will receive a valid object as input parameter, and has no output.

Extensible object
myObj: {
  __proto__: {}
  extend: function () {…}
}

Template object
template: {
  extensionMethod: function () {…},
  extensionProperty: 'someString'
}

Resulting object
myObj: {
  __proto__: {
    extensionMethod: function () {…}
  },
  extend: function () {…},
  extensionProperty: 'someString'
}

Note that __proto__ is a hidden property, representing the object’s prototype – depending on your test environment, 
you may not have access to it directly, but you can use other functions to do that.
Hints
To gain access to the prototype of an instance, use the Object.getPrototypeOf() function. 
To make a function shared between all instances, it’ll have to be attached to the prototype instead of the instance.

*/

function getExtensibleObject(){
    let obj = {
        extend: function (template){
            for(let key in template){
                if(template.hasOwnProperty(key)){ //get obly the object properties, not the prototype
                    let element = template[key];
                    console.log(typeof element);
                    if(typeof element === 'function'){
                        obj.__proto__[key] = element;
                    } else {
                        obj[key] = element;
                    }
                }
            }
        }
    };

    return obj;
}


//set up for local testing

let myObj = getExtensibleObject();
let template = {
    extensionMethod  : function (){
        console.log('stamat');
    },
    extensionProperty : 'propertyName'
};

myObj.extend(template);
console.log(myObj);
console.log(Object.getPrototypeOf(myObj));