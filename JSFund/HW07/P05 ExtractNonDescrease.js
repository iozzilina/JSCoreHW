// Write a JS function that extracts only those numbers that form a non-decreasing subsequence. In other words, you start from the first element and continue to the end of the given array of numbers. Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number. 
// The input comes as array of numbers.
// The output is the processed array after the filtration, which should be a non-decreasing subsequence. Each element should be printed on a new line.

function extractNonDecreasingSequence(arr){
    
   myArr = [];
   let max = arr[0];
   myArr.push(max);

   for(i=1;i<arr.length;i++){
       if(arr[i]>max){
           max = arr[i];
           myArr.push(max);
       }
   }

    return myArr;
}


extractNonDecreasingSequence([1,3,8,4,10,12,3,2,24]);
extractNonDecreasingSequence([1,2,3,4]);
extractNonDecreasingSequence([20,1,2,3,4]);