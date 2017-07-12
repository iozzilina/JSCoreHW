//combining data with functions

// let rect = {
//     width: 10,
//     height: 4,
//     grow: function(w,h){
//         this.width +=w;
//         this.height +=h;
//     },
//     print: function()
//     {
//         console.log(`[${this.width} x ${this.height}]`);
//     },

//     toString: function(){
//         return `rect [${this.width} x ${this.height}]`;
//     }
// };

// rect.print();
// rect.grow(1,2);
// rect.print();
// console.log('' + rect);// the ''+ forces the toString() of the object being called


//override the toString of the main object type... bad idea.
Array.prototype.toString = function(){
    return this.join('\n');
};

let myArr = ['pesho','gosho','maria'];

//console.log(myArr);
//console.log(myArr.toString());


// hiding functions from document view
let moduleObj1 = (function module(){

    function myFunc1(){};
    function myFunc2(){};
    function myFunc3(){};

    return {myFunc1,myFunc2,myFunc3};
})();

//module object pattern:
let moduleObj2 = {
    count: 0, //public. this is a problem.
    increase: function(num){return this.count+=num},
    decrease: function(num){return this.count-=num},
    value: function(){return this.count}
};

//module function pattern with closure

let moduleobj3 = (function (){
    let count = 0; //private.
    return {
        increase: (num) => count += num,
        decrease: (num) => count -= num,
        value: () => count
    };

})();

//revealing pattern
let revModule = (function (){
    let count = 0;  //private
    function change(amount) {return count+=amount;}
    function increase(num) {return change(num);}
    function descrease(num) {return change(-num);}
    function value(){return count;}
    function setValue(num){return count=num;}
    return {increase, descrease, value};
})();



// inheritance

let fatherCar ={
    brand: 'X5',
    color:'blue',
    toString: function(){
        return `[brand: ${this.brand}, color: ${this.color}]`;
    }
};

console.log(fatherCar.toString());

//factory pattern
let myCar = Object.create(fatherCar);

myCar.brand='booboo';
myCar.speed = 23;
console.log(myCar.toString());
console.log(myCar); //copies only the new stuff, for everything else, call on the parrent.

let workCar = Object.create(fatherCar);
workCar.type = 'electric';

workCar.toString = function(){
    return `[brand: ${this.brand}, color: ${this.color}, type: ${this.type}]`;
};

console.log(workCar.toString());