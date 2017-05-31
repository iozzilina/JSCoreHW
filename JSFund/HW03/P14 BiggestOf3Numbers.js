// Write a JS function that finds the biggest of 3 numbers.
// The input comes as array of 3 numbers.
// The output is the biggest from the input numbers.


function findMax(params){

    let max = params[0];

    for (let n of params) {
       if(max<n){
            max=n;            
        }
    }

    return max;
}

findMax([5,-2,7]);
findMax([5,-5,5]);
findMax([-10,-20,-30]);
