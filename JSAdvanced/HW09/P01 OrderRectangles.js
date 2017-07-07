/*
You will be passed a few pairs of widths and heights of rectangles, 
create objects to represent the rectangles. 
The objects should additionally have two functions area - that returns the area
of the rectangle and compareTo - that compares the current rectangle with another 
and produces a number  signifying if the current rectangle is smaller (negative number), 
equal (0) or larger(positive number) than the other rectangle. 

Input
The input will come as an array of arrays - every nested array will contain exactly 2 numbers the width and the height of the rectangle.
Output
The output must consist of an array of rectangles (objects) sorted by their area in descending order as a first criteria and by their width in descending order as a second criteria.  

Input	
[[10,5],[5,12]]	

Output
[{width:5, height:12, area:function(), compareTo:function(other)},
{width:10, height:5, area:funciton(),compareTo:function(other)}]
*/

function orderRectangles(arr){

    let rectArr = [];

    for(let arg of arr){
        rectArr.push(createRect(arg[0],arg[1]));
    }
    
    function createRect(width, height){
        let rect = {
            width: width,
            height: height,
            area: function(){
                return rect.width * rect.height;
            },
            compareTo: function(other){
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
                // if result is 0 (false), return the difference, if that is 0, return false.
            }            
        };
        return rect;
    }

    rectArr.sort((a,b)=>a.compareTo(b));
    return rectArr;

}

orderRectangles([[10,5], [3,20], [5,12]]);

