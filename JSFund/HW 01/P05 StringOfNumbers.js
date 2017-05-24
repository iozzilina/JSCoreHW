function stingOfNumbers(n){
    let max = Number(n); //cast to a number
    let result = '';
    
    for (var i = 1; i <=max; i++) {
        result+=i;        
    }

    return result;
}