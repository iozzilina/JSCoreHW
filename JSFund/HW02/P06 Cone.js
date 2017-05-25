function cone(r,h){

    let V = Math.PI * r * r *h /3;
    console.log ('volume = '+V);

    let s = Math.sqrt(r*r+h*h);

    let baseArea = Math.PI * r * r;

    let coneArea = Math.PI * r * s;

    console.log("area = " + (baseArea+coneArea));

}

cone(3,5);