/* 

//Your tests will be supplied a function named 'isSymmetric'. It needs to meet the following requirements:
//•	Takes and array as argument
//•	Returns false for any input that isn’t of the correct type
//•	Returns true if the input array is symmetric (first half is the same as the second half mirrored)
//•	Otherwise, returns false


//import functions from another file
let isSymmetric = require('../P05 CheckSymetry').isSymmetric;
let expect = require("chai").expect;


describe('Check symetry', () => {

    describe('General tests', () => {
        it('should be a function', () => {
            expect(typeof isSymmetric).to.equal('function');            
        });

        it('should take 1 paramenter', () => {
            expect(isSymmetric.length).to.equal(1);  
        });

    });

    describe('Value tests', () => {
        it('should return true for symetric array with even number of members', () => {
            expect(isSymmetric([1,2,3,3,2,1])).to.be.true;            
        });
        
        it('should return true for symetric array with odd number of members', () => {
            expect(isSymmetric([-1,2,-1])).to.be.true;            
        });
        
        it('should return true for arrays with one member', () => {
            expect(isSymmetric([1])).to.be.true;            
        });
        
        it("should return true for symetric arrays containing a mix of objects", () => {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5] )).to.be.true;            
        });



        it('should return false for non-symetric array with even number of members', () => {
            expect(isSymmetric([1,2,3,4,2,1])).to.be.false;            
        }); 
        
        it('should return false for non-symetric array with two members', () => {
            expect(isSymmetric([1,2])).to.be.false;            
        }); 

        it('should return false for non-symetric array with odd number of members', () => {
            expect(isSymmetric([-1,2,1])).to.be.false;            
        });    
       

        it("should return false for non-symetric arrays containing a mix of objects", () => {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5] )).to.be.false;            
        });

        it("should return false for input that is not array", () => {
            expect(isSymmetric(1,2,2,1)).to.be.false;            
        });    
        
        it("should return false for '1,2,3,4' - not an array", () => {
            expect(isSymmetric(1,2,3,4)).to.be.false;            
        }); 

        it("should return true for [udf, udf]", () => {
            expect(isSymmetric([NaN,NaN])).to.be.true;            
        }); 
    });    
}); 

*/