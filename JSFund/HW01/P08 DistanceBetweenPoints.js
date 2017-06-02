function findDistrance(x1, y1, x2, y2){
    let p1 = {x:x1,y:y1};
    let p2 = {x:x2,y:y2};

    //using pythagorean theorem
    //a^2+b^2=c^

    let a = p1.x-p2.x;
    let b = p1.y-p2.y;

    let c = Math.sqrt(a*a+b*b)

    return c;   
}