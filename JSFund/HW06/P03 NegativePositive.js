// Write a JS function that processes the elements in an array one by one and produces a new array. 
//Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
// The input comes as array of number elements.
// The output is printed on the console, each element on a new line.
//
// [7, -2, 8, 9]	
//-2
// 7
// 8
// 9

function customArraySort(arr){

    let result = [];

    for (let a of arr) {
       if(a < 0){
       result.unshift(a);
        }else{
            result.push(a);
        }
    }

    //console.dir(result);

    for (let e in result){
        console.log(result[e]);
    }
}

customArraySort([7, -2, 8, 9]);



