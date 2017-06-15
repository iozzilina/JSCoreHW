// Write a JS function that orders a given array of strings,
// by length in ascending order as primary criteria, 
// and by alphabetical value in ascending order as second criteria. 
//The comparison should be case-insensitive.
//
// The input comes as array of strings.
// The output is the ordered array of strings.


function sortArray(arr){

console.log(arr.sort(compare).join('\n'));

    function compare(a,b){
        if(a.length < b.length){
            return -1;            
        } else if (a.length>b.length){
            return 1;
        } else {  
            if(a<b){
                return -1;
            } else if(a>b){
                return 1;
            }else{
                return 0;
            }
          }
    } 
}

sortArray(['alpha','beta','gamma']);




