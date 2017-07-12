/*
Implement a collection, which keeps a list of numbers, sorted in ascending order. 
It must support the following functionality:

•	add(elemenent) – adds a new element to the collection
•	remove(index) – removes the element at position index
•	get(index) – returns the value of the element at position index
•	size – number of elements stored in the collection

The correct order of the element must be kept at all times, regardless of which operation is called. 
Removing and retrieving elements shouldn’t work if the provided index points outside the length of 
the collection (either throw an error or do nothing). Note the size of the collection is not a function. 
Write your code such that the first function in your solution returns an instance of your Sorted List.

Input / Output
All function that expect input as parameters will receive valid data.
Any result expected from a function should be returned as it’s result. 
Your main function should return an object instance with the required functionality as it’s result. 

*/

function getSortedList(){

    return {
        internalArray:[],
        size: 0,
        add: function(element){
            this.internalArray.push(element);
            this.size++,
            this.sort();
        },
        remove: function(index){
            if(index >= 0 && index < this.internalArray.length){
                this.internalArray.splice(index,1);
                this.size--;                
            }
        },
        get: function(index){
                if(index >= 0 && index < this.internalArray.length){
                    return this.internalArray[index];               
                }
        },
        toString: function(){
            return this.internalArray.join(', ');
        },
        sort: function(){
            this.internalArray = this.internalArray.sort((a,b)=>a-b);
        }
    }
}

//testing stuff
let sortedList = getSortedList();

sortedList.add(2);
sortedList.add(-1);
sortedList.add(10);
sortedList.add(-54);
console.log('size ' + sortedList.size);
console.log(sortedList.toString());
sortedList.remove(2);
console.log(sortedList.toString());
sortedList.remove(0);
console.log(sortedList.toString());
console.log('size ' + sortedList.size);
console.log(sortedList.get(0));
