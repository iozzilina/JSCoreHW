// You will be given the coordinates of 3 points on a 2D plane. Write a program that finds the two shortest segments that connect them (without going back to the starting point). When determining the listing order, use the order with the lowest numerical value (see the figure in the hints for more information).
// The input comes as an array of 6 numbers. The order is [x1, y1, x2, y2, x3, y3].
// The output is the return value of your program as a string, representing the order in which the three points must be visited and the final distance between them. See the examples for more info.

//[0, 0, 2, 0, 4, 0]	1->2->3: 4
//[5, 1, 1, 1, 5, 4]	2->1->3: 7
//[-1, -2, 3.5, 0, 0, 2]	1->3->2: 8.154234499766936


function findShortestPath(arr){

    let [x1,y1,x2,y2,x3,y3] = arr.map(Number);
   
    let d12 = getDist(x1,y1,x2,y2);
    let d23 = getDist(x2,y2,x3,y3);
    let d13 = getDist(x1,y1,x3,y3);

    if(d12<=d23 && d12<=d13){
        if(d23<=d13){
            return `1->2->3: ${d12+d23}`;           
        }
        else{
             return `2->1->3: ${d12+d13}`; 
        }
    }

    if(d23<=d12 && d23<=d13){
        if(d12<=d13){
             return `1->2->3: ${d12+d23}`;
        }else{
            return `1->3->2: ${d13+d23}`; 
        }
    }

    if(d13<=d12 && d13<=d23){
        if(d12<=d23){
             return `2->1->3: ${d12+d13}`;
        }
        else{
            return `1->3->2: ${d13+d23}`; 
        }
    }

    function getDist(a1,b1,a2,b2){
        return Math.sqrt((a1-a2)**2+(b1-b2)**2);
    }

}

findShortestPath([0, 0, 2, 0, 4, 0]);
findShortestPath([5, 1, 1, 1, 5, 4]);
findShortestPath([-1, -2, 3.5, 0, 0, 2]);