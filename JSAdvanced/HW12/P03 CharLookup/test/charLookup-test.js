/* 

You are tasked with writing unit tests for a simplistic function that retrieves a character 
(a string containing only 1 symbol in JS) at a given index from a passed in string.

You are supplied a function named lookupChar, which should have the following functionality:
•	lookupChar(string, index) - A function that accepts a string - the string in which we’ll 
    search and a number - the index of the char we want to lookup:
o	If the first parameter is not a string or the second parameter is not an integer - return undefined.
o	If both parameters are of the correct type, but the value of the index is incorrect 
    (bigger than or equal to the string length or a negative number) - return the text "Incorrect index". 
o	If both parameters have correct types and values - return the character at the specified index in the string.

JS Code

To ease you in the process, you are provided with an implementation which meets all of the specification
requirements for the lookupChar function:

lookupChar.js

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

Your tests will be supplied a function named "lookupChar" which contains the above mentioned logic, 
all test cases you write should reference this function. Submit in the judge your code containing
Mocha tests testing the above functionality.
*/

//import functions from another file
const lookupChar = require('../charLookup').lookupChar;
let expect = require('chai').expect;

describe('lookupChar(string, index) testing', () => {
    describe('input tests', () => {        
       
        it('should return undefined if the first parameter is not a string', () => {
            expect(lookupChar(2,3)).to.be.undefined;
        });

        it('should return undefined if the second parameter is not an number', () => {
            expect(lookupChar("2","3")).to.be.undefined;
        });

         it('should return undefined if the second parameter is not an integer', () => {
            expect(lookupChar("243345",3.43)).to.be.undefined;
        });

    });

    describe('index limits tests', () => {
        it('should return "Incorrect index" if the index is negative', () => {
            expect(lookupChar("444",-1)).to.be.equal('Incorrect index');
        });

        it('should return "Incorrect index" if the index is bigger than string length', () => {
            expect(lookupChar("444",5)).to.be.equal('Incorrect index');
        });

        it('should return "Incorrect index" if the index is equal to string length', () => {
            expect(lookupChar("444",3)).to.be.equal('Incorrect index');
        });
    });

    describe('output tests', () => {
        it('should return correct character at specified index', () => {
              expect(lookupChar("444",2)).to.be.equal('4');
        });
        it('should return correct character at specified index', () => {
              expect(lookupChar("abvrfd ghh",6)).to.be.equal(' ');
        });
        it('should return correct character at specified index', () => {
              expect(lookupChar("abvrfd ghh",2)).to.be.equal('v');
        });
    });
});