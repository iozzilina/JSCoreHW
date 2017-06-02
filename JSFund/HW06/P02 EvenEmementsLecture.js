function findEvens(arr){

    myarr = arr.filter((e,i) => i % 2 == 0).join(' ');
    console.log(myarr);
}

findEvens(['20', '30', '40', 50, 'gosho']);