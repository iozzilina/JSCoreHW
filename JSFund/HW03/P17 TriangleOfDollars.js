// Write a JS function that prints a triangle of n lines of “$” characters like shown in the examples.
// The input comes as a single number n (0 < n < 100).
// The output consists of n text lines like shown below.

// 3	
// $
// $$
// $$$

function drawTriangle(row){

let line = '';
for (var col = 1; col <= row; col++) {
    line +='$';
    console.log(line);
}

}
