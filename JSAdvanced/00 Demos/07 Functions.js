function invokeAll(functionsArr){
    for (let func of functionsArr){
        func();
    }
}


let last = function(){console.error("last");}

invokeAll([
    ()=>console.info('fist'),
    ()=>console.warn('second'), 
    last
    ]);


/*
IIFE (imediately invoked function expression )
*/

(function() {console.log("invoked!");} ());

//most readable :)
(function(args) {console.log("invoked!");}) (args);

let iife = function() {console.log("invoked!");}();

(function (arr){
    let sum = 0;
    for(let x of arr){
        sum+=x;
    }
    console.log(sum);
})([10,20,30]);


//

let f = (function(){
    let counter = 0;
    return function(){
        console.log(++counter);
      }
}) ();

f();


//

let myObj = {

    name: 'Pesho',
    age: 21,
    sayHello: function(thing){
        console.log(this.name + ' says hello ' + thing);
    }
};


let maria = {
    name: 'Maria',
    age: 21
};

myObj.sayHello();
myObj.sayHello.call(maria, 'boo'); // call the function with another object as 'this'
myObj.sayHello.apply(maria,['boo']);

let c = myObj.sayHello; // assins same function to variable 'c', unhooks it from object
c();

let d = myObj.sayHello.bind(myObj); //permenantly attached the context to the function
d();




