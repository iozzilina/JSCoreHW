/* 
Your task is to test a variable named mathEnforcer, which represents an object that should 
have the following functionality: 
•	addFive(num) - A function that accepts a single parameter:
    o	If the parameter is not a number, the funtion should return undefined.
    o	If the parameter is a number, add 5 to it, and return the result.
•	subtractTen(num) - A function that accepts a single parameter:
    o	If the parameter is not a number, the function should return  undefined.
    o	If the parameter is a number, subtract 10 from it, and return the result.
•	sum(num1, num2) - A function that should accepts two parameters:
    o	If any of the 2 parameters is not a number, the function should return undefined.
    o	If both parameters are numbers, the function should return their sum. 

JS Code
To ease you in the process, you are provided with an implementation which meets all of the
specification requirements for the mathEnforcer object:

mathEnforcer.js

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

The methods should function correctly for positive, negative and floating point numbers.
In case of floating point numbers the result should be considered correct if it is within 0.01 of the correct value.
Submit in the judge your code containing Mocha tests testing the above functionality.

*/

let expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer tests', () => {  

    describe('test addFive', () => {
        it('should addfive correctly for possitive numbers', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it('should addfive correctly for negative numbers', () => {
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
        });
        it('should addfive correctly for float-point numbers', () => {
            expect(mathEnforcer.addFive(10.4)).to.be.closeTo(15.4, 0.01);
        });
        it('should return undefined if input is a string', () => {
            expect(mathEnforcer.addFive('gosho')).to.be.undefined;
        });
        it('should return undefined if input is a number given as string', () => {
            expect(mathEnforcer.addFive('55')).to.be.undefined;
        });
        it('should return undefined if input is an array', () => {
            expect(mathEnforcer.addFive([3,2])).to.be.undefined;
        });
    });

    describe('test subtractTen', () => {
        it('should subtractTen correctly for possitive numbers', () => {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        });
        it('should subtractTen correctly for negative numbers', () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
        it('should subtractTen correctly for float-point numbers', () => {
            expect(mathEnforcer.subtractTen(10.4)).to.be.closeTo(0.4, 0.01);
        });
        it('should return undefined if input is a string', () => {
            expect(mathEnforcer.subtractTen('gosho')).to.be.undefined;
        });
        it('should return undefined if input is a number given as string', () => {
            expect(mathEnforcer.subtractTen('55')).to.be.undefined;
        });
        it('should return undefined if input is an array', () => {
            expect(mathEnforcer.subtractTen([3,2])).to.be.undefined;
        });
    });

    describe('test sum(num1,num2)', () => {

        it('should sum correctly for possitive numbers', () => {
            expect(mathEnforcer.sum(5,4)).to.be.equal(9);
        });
        it('should addfive correctly for negative numbers', () => {
            expect(mathEnforcer.sum(-10,-5)).to.be.equal(-15);
        });
        it('should addfive correctly for float-point numbers', () => {
            expect(mathEnforcer.sum(10.4,1.1)).to.be.closeTo(11.5, 0.01);
        });
        it('should return undefined if num1 is a string', () => {
            expect(mathEnforcer.sum('gosho',3)).to.be.undefined;
        });
        it('should return undefined if num2 is a string', () => {
            expect(mathEnforcer.sum(3,'gosho')).to.be.undefined;
        });       
    });     
});



