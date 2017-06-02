// Write a JS function that calculates and prints the sum of the first and the last elements in an array.
// The input comes as array of string elements holding numbers.
// The output is the return value of your function.
//['20', '30', '40']	60

function sumFirstLast(arr){
    nums = arr.map(Number)
    return nums[0]+nums[nums.length-1];
}