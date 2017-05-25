function oddEvenNaN(n){
    if(typeof(n)!="number" || n!=Math.round(n) ){
        return "invalid";
    }

    else if(n%2==0){
        return "even";
    }

    else {
        return "odd";
    }
}

oddEvenNaN(2);


