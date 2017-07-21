/* 
Your tests will be supplied with a class named SortedList. It needs to meet the following requirements:
•	Maintains a collection of numeric elements
•	Has an add(element) function, which adds a new element to the collection
•	Has a remove(index) function, which removes the element at position index
•	Has a get(index) function, which return the value of the element at position index
•	Keeps the elements of the collection sorted in ascending order at all times
•	Throws an error if the functions get() and remove() are supplied with an invalid index (negative or outside the collection) or if the collection is empty
•	Has a size() property getter, which returns the number of elements inside the collection
 */

const SortedList = require('../sorted-list').SortedList;
let expect = require('chai').expect;


describe('SortedList testing ->', () => {
    let myList;
    beforeEach(function(){
        myList = new SortedList();        
    });


    describe('check class integrity - SortedList', () => {
        it('should be a class', () => {
            expect(typeof SortedList).to.equal('function');
        });
        it('should have add(element) function', () => {
            expect(SortedList.prototype.hasOwnProperty('add')).to.be.true;
        });
        it('should have remove(index) function', () => {
           expect(SortedList.prototype.hasOwnProperty('remove')).to.be.true;
        });
        it('should have get(index) function', () => {
            expect(SortedList.prototype.hasOwnProperty('get')).to.be.true;
        });
        it('should have size() property', () => {
            expect(SortedList.prototype.hasOwnProperty('size')).to.be.true;
        });        
    });

    describe('functionality checks ->', () => {
        describe('add(element) ->', () => {
            it('should successfully add one element', () => {
                myList.add(5);
                expect(myList.list.join(', ')).to.equal('5');
            });
            it('should successfully add two elements', () => {
                myList.add(5);
                myList.add(6);
                expect(myList.list.join(', ')).to.equal('5, 6');
            });

            it('should successfully add two elements and sort them', () => {
                myList.add(6);
                myList.add(5);
                expect(myList.list.join(', ')).to.equal('5, 6');
            });

            it('should successfully add three elements and sort them', () => {
                myList.add(6);
                myList.add(4);
                myList.add(5);
                expect(myList.list.join(', ')).to.equal('4, 5, 6');
            });
        
        });

        describe('remove(index) ->', () => {
            it('should successfully remove the element at the specified index', () => {
                myList.add(6);
                myList.add(4);
                myList.add(5);
                myList.remove(1);
                expect(myList.list.join(', ')).to.equal('4, 6');
            });           
            it('should trow an error if the list is empty', () => {
                expect(()=> myList.remove()).throw(Error, 'Collection is empty');
                //expect(()=> myList.remove(1)).throw(Error);
            });
            it('should trow an error if the index is negative', () => {
                myList.add(5);
                myList.add(4);               
                expect(()=>myList.remove(-1)).throw(Error,'Index was outside the bounds of the collection.');
            });
            it('should trow an error if the index is equal to list.length', () => {
                myList.add(5); 
                expect(()=>myList.remove(1)).throw(Error,'Index was outside the bounds of the collection.');
            });
            it('should trow an error if the index is bigger than list.length', () => {
                myList.add(5);
                myList.add(4);               
                expect(()=>myList.remove(5)).throw(Error,'Index was outside the bounds of the collection.');
            });
        
        });

        describe('get(index) ->', () => {
            it('should successfully get the element at the specified index', () => {
                myList.add(6);
                myList.add(4);
                myList.add(5);
                myList.get(1);
                expect(myList.get(1)).to.equal(5);
            });           
            it('should trow an error if the list is empty', () => {
                expect(()=> myList.get()).throw(Error, 'Collection is empty');
            });
            it('should trow an error if the index is negative', () => {
                myList.add(5);
                myList.add(4);               
                expect(()=>myList.get(-1)).throw(Error,'Index was outside the bounds of the collection.');
            });
            it('should trow an error if the index is equal to list.length', () => {
                myList.add(5); 
                expect(()=>myList.get(1)).throw(Error,'Index was outside the bounds of the collection.');
            });
            it('should trow an error if the index is bigger than list.length', () => {
                myList.add(5);
                myList.add(4);               
                expect(()=>myList.get(5)).throw(Error,'Index was outside the bounds of the collection.');
            });
        });

        describe('size() ->', () => {
            it('should correctly return the size of an empty list', () => {
                             
                expect(myList.size).to.equal(0);
            });
            it('should correctly return the size of a non-empty list', () => {
                 myList.add(5);
                 expect(myList.size).to.equal(1);
            });            
        });
    });
});