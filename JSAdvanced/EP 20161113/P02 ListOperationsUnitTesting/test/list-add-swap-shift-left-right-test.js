
let createList = require('../list-add-swap-shift-left-right').createList;
let expect = require('chai').expect;

describe('Testing List functionality', () => {
    
    let myList;
    beforeEach(function(){
        myList = createList();        
    });


   describe('check function integrity - createList', () => {
        it('should be a function', () => {
            expect(typeof createList).to.equal('function');
        });
        it('should create an object that has add(element) function', () => {
            expect(myList).haveOwnProperty('add');
        });
        it('should create an object that has shiftLeft() function', () => {
           expect(myList).haveOwnProperty('shiftLeft');
        });
        it('should create an object that has shiftRight() function', () => {
            expect(myList).haveOwnProperty('shiftRight');
        });
        it('should create an object that has swap(index1, index2) function', () => {
            expect(myList).haveOwnProperty('swap');
        });    
        it('should start with an empty list', () => {
        expect(myList.toString()).to.be.equal('');
        });         
    });

    describe('add(element)', () => {
        it('should correctly add one element to the list', () => {
            myList.add(2);                 
            expect(myList.toString()).to.be.equal('2');            
        });
        it('should correctly add the element to the end of the list', () => {
            myList.add(2);
            myList.add(4);
            expect(myList.toString()).to.be.equal('2, 4');          
        });
    });

    describe('shiftLeft()', () => {
        it('should shift the list to the left with rotation, first becomes last.', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.shiftLeft();
            expect(myList.toString()).to.be.equal('4, 5, 2');  
        });
        it('should shift the list many times to the left with rotation, first becomes last.', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.shiftLeft();
            myList.shiftLeft();
            expect(myList.toString()).to.be.equal('5, 2, 4');  
        });
        it('should do nothing if the list is empty.', () => {            
            myList.shiftLeft();
            expect(myList.toString()).to.be.equal('');  
        });
         it('should do nothing if the list has only one element.', () => {   
            myList.add(5);         
            myList.shiftLeft();
            expect(myList.toString()).to.be.equal('5');  
        });

    });

    describe('shiftRight()', () => {
        it('should shift the list to the right with rotation, last becomes first.', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.shiftRight();
            expect(myList.toString()).to.be.equal('5, 2, 4');  
        });
        it('should shift the list many times to the right with rotation, last becomes first.', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.shiftRight();
            myList.shiftRight();
            expect(myList.toString()).to.be.equal('4, 5, 2');  
        });

        it('should do nothing if the list is empty.', () => {            
            myList.shiftRight();
            expect(myList.toString()).to.be.equal('');  
        });
         it('should do nothing if the list has only one element.', () => {   
            myList.add(5);         
            myList.shiftRight();
            expect(myList.toString()).to.be.equal('5');  
        });
    });

    describe('swap(index1, index2) ', () => {
        it('should swaps the items at the specified indexes', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.swap(1, 2);
            expect(myList.toString()).to.be.equal('2, 5, 4');  
        });
        it('should return true after successfull swap', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);          
            expect(myList.swap(1, 2)).to.be.true;  
        });

        //first index == 0
         it('should swaps the items at the specified indexes if first integer is zero', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.swap(0, 1);
            expect(myList.toString()).to.be.equal('4, 2, 5');  
        });
        it('should return true after successfull swap if first integer is zero', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);          
            expect(myList.swap(0, 1)).to.be.true;  
        });

        //second index == 0
         it('should swaps the items at the specified indexes if second integer is zero', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.swap(1, 0);
            expect(myList.toString()).to.be.equal('4, 2, 5');  
        });
        it('should return true after successfull swap if second integer is zero', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);          
            expect(myList.swap(1, 0)).to.be.true;  
        });

        //first index not integer
        it('should not change the list if the first index not integer', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.swap('a', 2);
            expect(myList.toString()).to.be.equal('2, 4, 5');  
        });
        it('should return false if the first index not integer', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);            
            expect(myList.swap('a', 2)).to.be.false;  
        });
        //first index > data.length
        it('should not change the list if the first index is larger than data.length', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.swap('a', 2);
            expect(myList.toString()).to.be.equal('2, 4, 5');  
        });
        
        it('should return false if the first index is larger than data.length', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);            
            expect(myList.swap(5, 2)).to.be.false;
        });

         //first index == data.length
        it('should not change the list if the first index is equal to data.length', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.swap(3, 2);
            expect(myList.toString()).to.be.equal('2, 4, 5');  
        });

        it('should return false if the first index is equal to data.length', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);            
            expect(myList.swap(3, 2)).to.be.false;
        });
       

        //first index < 0
        it('should not change the list if the first index is negative', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.swap(-1, 2);
            expect(myList.toString()).to.be.equal('2, 4, 5');  
        });
        
        it('should return false if the first index is negative', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);            
            expect(myList.swap(-1, 2)).to.be.false;
        });

        //second index not integer
        it('should not change the list if the second index not integer', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.swap(2, 'a');
            expect(myList.toString()).to.be.equal('2, 4, 5');  
        });

        it('should return false if the second index not integer', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);            
            expect(myList.swap(2, 'a')).to.be.false;  
        });

        //second index > data.length
        it('should not change the list if the second index is larger than data.length', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.swap(1, 5);
            expect(myList.toString()).to.be.equal('2, 4, 5');  
        });

        it('should return false if the second index is larger than data.length', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);            
            expect(myList.swap(1, 6)).to.be.false;
        });

        //second index == data.length
        it('should not change the list if the second index is larger than data.length', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.swap(1, 3);
            expect(myList.toString()).to.be.equal('2, 4, 5');  
        });

        it('should return false if the second index is larger than data.length', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);            
            expect(myList.swap(1, 3)).to.be.false;
        });

        //second index < 0
        it('should not change the list if the second index is negative', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.swap(1, -1);
            expect(myList.toString()).to.be.equal('2, 4, 5');  
        });
        
        it('should return false if the second index is negative', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);            
            expect(myList.swap(1, -4)).to.be.false;
        });

        //equal indexes
        it('should not change the list if the indexes are equal', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);
            myList.swap(1, 1);
            expect(myList.toString()).to.be.equal('2, 4, 5');  
        });
        it('should return false if the indexes are equal', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);            
            expect(myList.swap(1, 1)).to.be.false;
        });
    });

    describe('ToString()', () => {
        it('should return correctly formated list of many elements', () => {
            myList.add(2);
            myList.add(4);
            myList.add(5);           
            expect(myList.toString()).to.be.equal('2, 4, 5');  
        });
        it('should return correctly formated list of one element', () => {
            myList.add(2);                      
            expect(myList.toString()).to.be.equal('2');  
        });
          it('should return correctly formated list of zero elements', () => {
            expect(myList.toString()).to.be.equal('');  
        });
    });
});