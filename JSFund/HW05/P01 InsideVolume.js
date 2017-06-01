// Write a JS function that determines whether a point is inside the volume, defined by the box, shown on the right.
// The input comes as an array of numbers. Each set of 3 elements are the x, y and z coordinates of a point.
// The output should be printed to the console on a new line for each point.
// Print inside if the point lies inside the volume and outisde otherwise.


function solve(arr){
    for(let i = 0; i <arr.length;i+=3){

        let x = arr[i];
        let y = arr[i+1];
        let z = arr[i+2]

        if(isInVolume(x,y,z)){
            console.log('inside');
        }else{
            console.log('outside');
        }

    }

function isInVolume(x,y,z){
    //volume to check against
    let x1= 10, x2 = 50;
    let y1=20, y2=80;
    let z1=15, z2 = 50;

    if(x>=x1 && x<=x2){
        if(y>=y1 && y<=y2){
            if(z>=z1 &&z<=z2){
                return true;
            }
        }
    }
    return false;
}

}


solve([13.1, 50, 31.5,50, 80, 50,-5, 18, 43, 8, 20, 22]);
