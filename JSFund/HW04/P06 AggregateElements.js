// Write a JS program that performs and outputs different operations on an array of elements. 
//Implement the following operations:
// •	Sum(ai) - calculates the sum all elements from the input array
// •	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
// •	Concat(ai) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.
// The output should be printed on the console on a new line for each of the operations.

function aggregate(arr){

    function operation(elements, start, func){
        for (let e of elements){
            start = func(start,e);
        }
        return start;
    }
  
    console.log(operation(arr,0,(a,b)=>a+b));
    console.log(operation(arr,0,(a,b)=>a+1/b));
    console.log(operation(arr,'',(a,b)=>a+b));

}

aggregate([1,2,3,4,5]);