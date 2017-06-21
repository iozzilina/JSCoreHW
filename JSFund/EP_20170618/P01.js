function buildPyramid(base, stepH){

    [base,stepH] = [base, stepH].map(Number);
    //console.log(base*stepH);

    let stoneQty = 0.00;
    let marbleQty = 0.00;
    let lapisQty = 0.00;
    let goldQty = 0.00;
    let steps = 0.00;

    //if base is even, top row = 4,gold
    //if base is odd, top row = 1, gold

    let stoneSteps = 0;

    if(base%2==0){
        stoneSteps = base/2-1;
        goldQty = 4*stepH;
    } else {
        stoneSteps = ((base-1)/2);
        goldQty = 1*stepH;
    }

    if(base == 2){
        stoneSteps = 0;
        goldQty = 4;
    }

       
    //console.log("numner of stone steps: " + stoneSteps);    

    for(let l = 1; l<=stoneSteps; l++){

        let side = base-(l-1)*2;    
        let area = side*side;
        let inner = (side-2)*(side-2);
        let cover = area - inner;
        //console.log (`Stone layer ${l} is ${side} unit wide`); 

        stoneQty+=inner;
        if(l%5===0){
            lapisQty+=cover;
        } else {
            marbleQty+=cover;
        }
    }    

    steps = stoneSteps+1;

    console.log(`Stone required: ${Math.ceil(stoneQty*stepH)}`);
    console.log(`Marble required: ${Math.ceil(marbleQty*stepH)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisQty*stepH)}`);
    console.log(`Gold required: ${Math.ceil(goldQty*stepH)}`);
    console.log(`Final pyramid height: ${Math.floor(steps*stepH)}`);
}

//buildPyramid(11,1);

//buildPyramid(11,0.75);

//buildPyramid(12,1);

buildPyramid(2,1);