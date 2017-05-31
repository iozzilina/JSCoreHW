// Write a JS function that takes as input 6 numbers x, y, xMin, xMax, yMin, yMax 
// and prints whether the point {x, y} is inside the rectangle or outside of it. 
// If the point is at the rectangle border, it is considered inside.
// The input comes as array of numbers. Its holds the representations of x, y, xMin, xMax, yMin, yMax.
// All numbers will in the range [-1 000 000 … 1 000 000]. It is guaranteed that xMin < xMax and yMin < yMax.
// The output is a single line holding “inside” or “outside”.

function isContained(coords ){

let result = 'outside';

let[x, y, xMin, xMax, yMin, yMax ] = coords;

if(x>=xMin && x<=xMax && y>=yMin && y<=yMax){
    result = 'inside';
}

return result;
}