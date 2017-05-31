// Write a JS function to solve a quadratic equation by given in standard form as its coefficients: a, b, c. 
//You may learn more about quadratic equations here: https://www.mathsisfun.com/algebra/quadratic-equation.html.
// The input comes as 3 numbers a, b and c. The value of a will be non-zero.
// The output depends on the equation:
// •	It holds two numbers x1 and x2 if the equation has two different solutions (roots): x1 and x2.
// o	First print the smaller root, then the greater.
// •	It holds a single number x if the equation has only one solution (root): x.
// •	It holds the text “No” if the equation has no solutions (no real roots).

 // D = b2 - 4*a*c 
    // if D>0
    // x1 = (-b + √d) / (2*a)
    // x2 = (-b - √d) / (2*a) 
    // if D==0
    // x1=x2 = -b / (2*a)
    // if D<0, no real roots

function solve(a,b,c){ 

    let D = b*b - 4*a*c;    

    if(D>0){
        let x1 = (-b + Math.sqrt(D)) / (2*a);
        let x2 = (-b - Math.sqrt(D)) / (2*a);

        console.log(Math.min(x1,x2));
        console.log(Math.max(x1,x2));        
    }

    else if(D==0){
        let x = -b / (2*a);
        console.log(x);       
    }

    else {
        console.log('No');
    }
}

solve(6,11,-35);

