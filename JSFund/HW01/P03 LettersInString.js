function checkStingForSymbol(word,symbol){
    let count = 0;

    for(let l of word){
        if(l==symbol){
            count++;
        }
    }

    console.log(count);
}