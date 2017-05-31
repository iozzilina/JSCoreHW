// Write a JS function that checks if an input string is a palindrome.
// The input comes as a single string argument.
// The output is the return value of your function. It should be true if the string is a palindrome and false if it’s not.


function isPalindrome(word){
    for(let i = 0; i <word.length/2;i++){
        if(word[i] != word[word.length-1-i]){
            console.log(false);
            return;
        }
    }   
       console.log(true);
     
}