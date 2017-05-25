function triableAreaBySides(a,b,c){
    let s = (a+b+c)/2; // halfperimeter

    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

    return area;
}