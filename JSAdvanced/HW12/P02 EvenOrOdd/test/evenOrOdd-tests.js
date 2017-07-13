/* 
You need to write unit tests for a function isOddOrEven that checks whether a passed in string has even or odd length. 
The function has the following functionality:
•	isOddOrEven(string) - A function that accepts a string and determines if the string has even or odd length.
o	If the passed parameter is not a string return undefined.
o	If the parameter is a string - return either "even" or "odd" based on the string's length.

*/

//import functions from another file
const isOddOrEven = require('../evenOrOdd').isOddOrEven;
let expect = require('chai').expect;

describe('isOddOrEven(string) testing', () => {
   it('should return even for string with length 4', () => {
       expect(isOddOrEven('baba')).to.be.equal('even');
   });

   it('should return odd for string with length 5', () => {
       expect(isOddOrEven('babab')).to.be.equal('odd');
   });

   it('should return undefined for number input', () => {
       expect(isOddOrEven(2)).to.be.undefined;
   });

   it('should return undefined for array input', () => {
       expect(isOddOrEven([1,2])).to.be.undefined;
   });   
});