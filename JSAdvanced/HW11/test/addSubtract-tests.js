/* 
function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
Your tests will be supplied a function named 'createCalculator'. It needs to meet the following requirements:
•	Returns a module (object), containing the functions add, subtract and get as properties
•	Keeps an internal sum which can’t be modified from the outside
•	The functions add and subtract take a parameter that can be parsed as a number (
    either a number or a string containing a number) that is added or subtracted from the internal sum
•	The function get returns the value of the internal sum 
*/


/* 
//import functions from another file
const createCalculator = require('../P07 AddSubtract').createCalculator;
let expect = require('chai').expect;


describe('Calculator testing', () => {  
    let calc = createCalculator();
    beforeEach(() => calc = createCalculator());

    describe('Return Object tests', () => {
        it('should return an object', () => {           
            expect(typeof calc).to.be.equal('object');
        });    

        it('object should have add property', () => {
            expect(calc).haveOwnProperty('add');
        });

        it('object should have subtract property', () => {
            expect(calc).haveOwnProperty('subtract');
        });

        it('object should have get property', () => {
            expect(calc).haveOwnProperty('get');
        });
    });

    describe('Internal Value Tests', () => {
        //it('should keep an internal sum which can’t be modified from the outside', () => {            
        //});

        
    });

    describe('Functionality tests', () => {

        it('should have initial value of 0', () => {
            expect(calc.get()).to.equal(0);
        });

        it('should add whole numbers correctly', () => {
            calc.add(3);
            calc.add(4);
            expect(calc.get()).to.equal(7);
        });

        it('should add fractions correctly', () => {
            calc.add(3.1);
            calc.add(4.2);
            expect(calc.get()).to.be.closeTo(7.3, 0.0001);
        });

        it('should add whole numbers correctly given as string', () => {
            calc.add('3');
            calc.add('4');
            expect(calc.get()).to.equal(7);
        });
        
        it('should subtract whole numbers correctly', () => {
            calc.add(5);
            calc.subtract(2);
            expect(calc.get()).to.equal(3);
        });

        it('should subtract whole numbers given as string', () => {
            calc.add('5');
            calc.subtract('2');
            expect(calc.get()).to.equal(3);
        });

        it('should subtract fractions correctly', () => {
            calc.add(5.2);
            calc.subtract(4.1);
            expect(calc.get()).to.be.closeTo(1.1, 0.0001);
        });

        it('should add negative numbers correctly', () => {
            calc.add(-3);
            calc.add(8);
            expect(calc.get()).to.equal(5);
        });


        it('should not add NaNs', () => {
            calc.add('pesho');            
            expect(calc.get()).to.NaN;
        });

        it('should not subtract NaNs', () => {
            calc.subtract('pesho');            
            expect(calc.get()).to.NaN;
        });

    });

});

*/