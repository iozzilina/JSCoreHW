// Write a JS function that counts how many times a string occurs in a given text. 
// Overlapping strings are allowed.
// The input comes as two string arguments. 
// The first element is the target string and the second element is the text in which to search for occurrences.
// The output should be a number, printed on the console.


function countStringsInText(str, text){
    let count = 0;
    let myText = text.toLowerCase();
    let index = myText.indexOf(str);

    while(index!==-1){
        index++;
        count++;
        index = myText.indexOf(str,index);       
    }
    
    return count;
}

console.log(countStringsInText('the', 'The quick brown fox jumps over the lay dog.'));
console.log(countStringsInText("haha","hahaha"));
console.log(countStringsInText('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'));