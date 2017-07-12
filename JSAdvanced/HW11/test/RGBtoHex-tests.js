/* 

//Your tests will be supplied a function named 'rgbToHexColor', 
//which takes three arguments. It needs to meet the following requirements:
//•	Takes three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
//•	Returns the same color in hexadecimal format as a string (e.g. '#FF9EAA')
//•	Returns 'undefined' if any of the input parameters are of invalid type or not in the expected range

//import functions from another file
let rgbToHexColor = require('../P06 RGBtoHEX').rgbToHexColor;
let expect = require("chai").expect;


describe('rgbToHexColor(red, green, blue)', () => {

    describe('General tests', () => {
        it('should be a function', () => {
            expect(typeof rgbToHexColor).to.equal('function');
            
        });
        
    });

    describe('Valid input tests', () => {
        it('should return #FF9EAA for (255, 158, 170)', () => {
             expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
        });

        it('should pad values with zeros, #0C0D0E for (12, 13, 14) ', () => {
             expect(rgbToHexColor(12, 13, 14)).to.equal('#0C0D0E');
        });

        it('lowest limit - should return #000000 for (0, 0, 0) ', () => {
             expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });

        it('highest limit - should return #FFFFFF for (255, 255, 255)  ', () => {
             expect(rgbToHexColor(255, 255, 255) ).to.equal('#FFFFFF');
        });
    });


    describe('Invalid input tests', () => {
        it('should return undefined for (-1, 0, 0)', () => {
             expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        });

        it('should return undefined for (0, -1, 0)', () => {
             expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        });

        it('should return undefined for (0, 0, -1)', () => {
             expect(rgbToHexColor(0, 0,-1)).to.be.undefined;
        });

        it('should return undefined for (256, 0, 0)', () => {
             expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        });

        it('should return undefined for (0, 256, 0)', () => {
             expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        });
            
        it('should return undefined for (0, 0, 256)', () => {
             expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
        });


        it('should return undefined for (3.14, 0, 0)', () => {
             expect(rgbToHexColor(3.14, 0, 0)).to.be.undefined;
        });

        it('should return undefined for (0, 3.14, 0)', () => {
             expect(rgbToHexColor(0, 3.14, 0)).to.be.undefined;
        });
            
        it('should return undefined for (0, 0, 3.14)', () => {
             expect(rgbToHexColor(0, 0, 3.14)).to.be.undefined;
        });

        it('should return undefined for ("5", [3], {8:9})', () => {
             expect(rgbToHexColor("5", [3], {8:9})).to.be.undefined;
        });

        it('should return undefined for ()', () => {
             expect(rgbToHexColor()).to.be.undefined;
        });

    });

});

*/