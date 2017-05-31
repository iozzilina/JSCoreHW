function gradiansToDegrees(gons){

    let totalDegrees = gons*9/10;

    let degrees = totalDegrees%360;
    
    if(degrees<0){
        degrees+=360;
    }

    console.log(degrees);
}

gradiansToDegrees(100);
gradiansToDegrees(400);
gradiansToDegrees(850);
gradiansToDegrees(-50);


function main(grads) {
let degrees=(grads*360/400)%360;
while(degrees<0){
degrees+=360;
}
return degrees;
}