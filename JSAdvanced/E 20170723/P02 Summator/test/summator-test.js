let Sumator = require('../summator').Sumator;
let expect = require('chai').expect;


describe('testing Summator ', () => {

    let mySummator;
    beforeEach(() => {
        mySummator = new Sumator();
    });

    describe('General Tests ', () => {
        it('should be a class', () => {
            expect(typeof Sumator).to.equal('function');
        });
        it('should have property "data" ', () => {
            expect(mySummator.data).to.not.be.undefined;
        });
        it('should have add(element) function', () => {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.true;
        });
        it('should have sumNums() function', () => {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.true;
        });

        it('should have removeByFilter(filterFunc) function', () => {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.true;
        });
        it('should have toString() function', () => {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.true;
        });
    });

    //Contains a property data that is initialized to an empty array.
    describe('Initial state ', () => {
        it('shoud have the data property initialized to an empty array', () => {
            expect(mySummator.data.length).to.equal(0);
        });
    });

    describe('Functionality tests', () => {
        describe('add(element)', () => {
            it('should add a number to the array', () => {
                mySummator.add(5);               
                expect(mySummator.data.join(', ')).to.equal('5');
            }); 
            it('should add a string to the array', () => {
                mySummator.add(5);  
                mySummator.add('pesho');                   
                expect(mySummator.data.join(', ')).to.equal('5, pesho');
            }); 
            it('should add an object to the array', () => {
                mySummator.add(5);  
                mySummator.add('pesho');   
                let myObj = {a:4};     
                mySummator.add(myObj);                 
                expect(mySummator.data.join(', ')).to.equal('5, pesho, [object Object]');
            }); 
        });

        //sums only the numbers from the data and returns the sum.
        // If there are no numbers stored, the function should return zero.
        describe('sumNums()', () => {
            it('should return zero with empty array', () => {
                expect(mySummator.sumNums()).to.equal(0);
            });
            it('should corectly add only the numbers from an array', () => {
                mySummator.add(5);  
                mySummator.add('pesho');  
                mySummator.add(10);  
                expect(mySummator.sumNums()).to.equal(15);
            });
            it('should corectly add only the numbers from an array, even if stored as string', () => {
                mySummator.add(5);  
                mySummator.add('5.5');  
                mySummator.add(10);  
                expect(mySummator.sumNums()).to.equal(15);
            });
        });
        
        //filters the data by a given function. 
        //All of the items that match the criteria should be removed.
        describe('removeByFilter(filterFunc) ', () => {
            it('should remove all numbers if specified', () => {
                mySummator.add(5);  
                mySummator.add('pesho');  
                mySummator.add(10);  
                mySummator.add('gosho');  
                mySummator.removeByFilter(x=>x*1==x);
                expect(mySummator.data.join(', ')).to.equal("pesho, gosho");
            });              
            it('should return the list unchaged if nothing matches the criteria', () => {
                mySummator.add(5);  
                mySummator.add('pesho');  
                mySummator.add(11);  
                mySummator.add('gosho');  
                mySummator.removeByFilter(x => x % 2 === 0);
                expect(mySummator.data.join(', ')).to.equal("5, pesho, 11, gosho");
            }); 
        }); 

        //returns a string, containing a list of all items from the data, 
        //joined with a comma and a space. If there are no items stored, 
        //it should return the string "(empty)".
        describe('toString() ', () => {
            it('should return the string (empty) if the list has no elements', () => {
                expect(mySummator.toString()).to.equal("(empty)");
            }); 
            it('should return correct string if the list has one element', () => {
                mySummator.add('pesho');  
                expect(mySummator.toString()).to.equal("pesho");
            }); 
            it('should return a ", " separated list if two elements', () => {
                mySummator.add(5);  
                mySummator.add('pesho');  
                expect(mySummator.toString()).to.equal("5, pesho");
            });            
        });
    });
});