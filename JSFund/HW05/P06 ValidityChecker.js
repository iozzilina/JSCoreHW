// Write a JS program that receives two points in the format [x1, y1, x2, y2] 
//and checks if the distances between each point and the start of the cartesian coordinate system (0, 0)
//and between the points themselves is valid. A distance between two points is considered valid,
//if it is an integer value. In case a distance is valid write "{x1, y1} to {x2, y2} is valid", 
//in case the distance is invalid write "{x1, y1} to {x2, y2} is invalid". 
//
// The order of comparisons should always be first {x1, y1} to {0, 0}, 
//then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
//
// The input consists of two points given as an array of numbers.
// For each comparison print on the output either "{x1, y1} to {x2, y2} is valid" 
//if the distance between them is valid, or "{x1, y1} to {x2, y2} is invalid"- if it’s invalid.

// Input	                Output
// [3, 0, 0, 4]	            {3, 0} to {0, 0} is valid
//                          {0, 4} to {0, 0} is valid
//                          {3, 0} to {0, 4} is valid
// [2, 1, 1, 1]	            {2, 1} to {0, 0} is invalid
//                          {1, 1} to {0, 0} is invalid
//                          {2, 1} to {1, 1} is valid

function distanceValidation([x1,y1,x2,y2]){

    let x3=0,y3=0; 

    function findDistance(a1,b1,a2,b2){
        let dist = Math.sqrt((a1-a2)*(a1-a2)+(b1-b2)*(b1-b2));
        return dist;
    }

    function checkInteger(num){
        if(Math.round(num)===num){
            return true;
        }
        return false;
    }

    function checkValidity(a1,b1,a2,b2){
        if(checkInteger(findDistance(a1,b1,a2,b2))){
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is valid`);            
        }else{
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is invalid`); 
        }        
    }

    checkValidity(x1,y1,x3,y3);
    checkValidity(x2,y2,x3,y3);
    checkValidity(x1,y1,x2,y2);
}


distanceValidation([3, 0, 0, 4]);
distanceValidation([2, 1, 1, 1]);