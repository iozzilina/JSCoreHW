function cookingByNumbers(arr){
    let[start, op1, op2, op3, op4, op5] = [Number(arr[0]), arr[1],arr[2],arr[3],arr[4],arr[5]];

    let chop = (num)=>num/2;
    let dice = (num)=>Math.sqrt(num);
    let spice= (num)=>++num;
    let bake = (num)=>num*3;
    let fillet = (num)=>num*0.8;

    for(let op of [op1, op2, op3, op4, op5]){
        switch(op){
            case 'chop': start = chop(start);
            case 'dice': start = dice(start);
            case 'spice' : start = spice(start);
            case 'bake' : start = bake(start);
            case 'fillet' : start = fillet(start);
        }

        console.log(start);
    }

}

cookByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);