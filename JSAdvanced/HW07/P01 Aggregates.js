/*
Write a JS program that uses a reducer function to display information 
about an input array.

Input
You will receive an array of numeric values.

Output
The output should be the printed on the console. 
Display the sum of all elements in the array, the value of the smallest, t
he value of the biggest, the product of all elements and a string of all 
elements joined together.


input:
[2,3,10,5]

output:
Sum = 20
Min = 2
Max = 10
Product = 300
Join = 23105
*/

function aggregate(arr){
    
    arr = arr.map(Number);

    function reduce(arr, func){
        let result = arr[0];
        for (let nextEl of arr.slice(1)){
            result = func(result, nextEl);
        }
        return result;
    }

    let sum = reduce(arr,(a,b)=> a+b);
    let min = reduce(arr,(a,b)=> a > b ? b : a);
    let max = reduce(arr,(a,b)=> a < b ? b : a);
    let product = reduce(arr,(a,b)=>a*b);
    let join = reduce(arr,(a,b)=>String(a)+b);

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);
}

aggregate([2,3,10,5]);

