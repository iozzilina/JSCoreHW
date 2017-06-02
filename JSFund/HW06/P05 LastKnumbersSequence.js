// You are given two integers n and k. Write a JS function that generates and prints the following sequence:
// •	The first element is 1
// •	Every following element equals the sum of the previous k elements
// •	The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is printed on the console on a single line, separated by space.

// Input	Output
// 6, 3	    1 1 2 4 7 13
// 8, 2	    1 1 2 3 5 8 13 21

function numberSequence(n,k){
    let result = [];
    result.push(1);    

    for(i=1;i<n;i++){
        let next = 0;
        for(j=k; j>0;j--){
            if(result[i-j]){
            next+=result[i-j];
            }
        }     
        result[i]=next;
    }

    return result.join(' ');
}

numberSequence(6, 3);
numberSequence(8, 2);

