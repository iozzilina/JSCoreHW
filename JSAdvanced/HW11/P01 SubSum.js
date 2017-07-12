/*
1.	Sub Sum
Write a JS function to sum a range of numeric elements from array. 
The function takes three parameters – the first is an array, the second is start index and 
the third is an end index. Both indexes are inclusive. 
Assume array elements may not be of type Number and cast everything. 

Implement the following error handling:
•	if the first element is not an array, return NaN
•	if the start index is less than zero, assume it is zero
•	if the end index is outside the bounds of the array, assume it points to the last index of the array

Input / Output
Your function must take three parameters. As output, return the resulting sum as instructed.

Sample Input	                                Sample Output
subsum([10, 20, 30, 40, 50, 60], 3, 300)	    150
subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)	    3.3
subsum([10, 'twenty', 30, 40], 0, 2)	        NaN
subsum([], 1, 2)	                            0
subsum('text', 0, 2)	                        NaN

*/

function subsum(arr,startIndex,endIndex){
    let sum = 0;

    if(!Array.isArray(arr)){
        return NaN;
    }

    if(arr.length == 0){
        return 0;
    }

    if(startIndex > arr.length-1){
        return NaN;
    }

    if(startIndex<0){
        startIndex = 0;
    }

    if(endIndex > arr.length-1){
        endIndex = arr.length-1;
    }

    for(let i = startIndex; i<= endIndex; i++){
        sum+=Number(arr[i]);
    }

    return sum;
}


console.log(subsum({}, 1, 2));
console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subsum([10, 'twenty', 30, 40], 0, 2));
console.log(subsum([], 1, 2));
console.log(subsum('text', 0, 2));