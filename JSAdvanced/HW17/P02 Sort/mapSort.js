/* 
You probably wanted to be able to sort a map while going through the Fundamentals course, 
so we're going to make a simple program to do that. You need to return (attach to result) 
a method mapSort which takes in a Map and optionally a sort function and returns a new map that is sorted. 
In case no sort function is supplied the map should be ordered by comparing its keys. 
In order to keep things separate keep the mapSort function in a different file, 
you can create a file helper-functions.js with useful functions to help you when working with JavaScript, 
mapSort can be part of these helper functions.

mapSort(map, sortFn) - returns a new Map that is sorted, in case sortFn is not supplied the returned map should be sorted by its keys.

Sample Input	                Output
let map = new Map();            Map { 1 => 'Gosho', 3 => 'Pesho', 7 => 'Aleks' }
map.set(3,"Pesho");
map.set(1,"Gosho");
map.set(7,"Aleks");
mapSort(map);	


Example

Here's an example template of how your code should look:

template.js
//Require/Import mapSort

result.mapSort = mapSort;
 */

function mapSort(map, sortCriteria) {
    if (sortCriteria == undefined){
        sortCriteria = function (a, b) {
            return a[0].toString().localeCompare(b[0].toString());
        };
    }

    let sortedMap = new Map();
    for (let [key, value] of Array.from(map).sort(sortCriteria)){
        sortedMap.set(key, value)
    }
    return sortedMap
}

module.exports = mapSort;   