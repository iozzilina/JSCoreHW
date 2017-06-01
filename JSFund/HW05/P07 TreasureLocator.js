// You will be given a series of coordinates, leading to a buried treasure. 
//Use the map to the right to write a program that locates on which island it is. 
//After you find where all the treasure chests are, compose a list and print it on the console. 
//If a chest is not on any of the islands, print “On the bottom of the ocean” to inform your treasure-hunting 
//team to bring diving gear. If the location is on the shore (border) of the island, it’s still considered to lie inside.
//
// The input comes as an array with a variable number of elements that are numbers. 
//Each pair is the coordinates to a buried treasure chest.
//
// The output is a list of the locations of every treasure chest, 
//either the name of an island or “On the bottom of the ocean”, printed on the console.

// [4, 2, 1.5, 6.5, 1, 3]	
// On the bottom of the ocean
// Tonga
// Tuvalu


function findTreasure(arr){
 
 let tuvalu = [1,1,3,3,'Tuvalu'];
 let tokelau = [8,0,9,1,'Tokelau'];
 let samoa = [5,3,7,6,'Samoa'];
 let tonga = [0,6,2,8,'Tonga'];
 let cook = [4,7,9,8,'Cook'];

 let found = false;

 let islands = [tuvalu,tokelau,samoa,tonga,cook];

 function isInside(x0,y0,island){
    if(x0>=island[0] && x0<=island[2]){
        if(y0>=island[1] && y0<=island[3]){
            return true;
        }
    }
    return false; 
 }
 
 for (var i = 0; i < arr.length; i+=2) {
     for(let e of islands){     
        //console.log(`checking ${arr[i]},${arr[i+1]} in ${e[4]}`);
        if(isInside(arr[i],arr[i+1],e)){
            console.log(e[4]);           
            found = true;
            continue;
        }
     }
     if(!found){
         console.log('On the bottom of the ocean');
     }
  }

}

findTreasure([4, 2, 1.5, 6.5, 1, 3]);
findTreasure([6, 4]);