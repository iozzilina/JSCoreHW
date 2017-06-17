/*
The Mexicans are coming to take our jobs! To protect our freedom, we must build a wall around our country. 
Write a JS program that keeps track of the construction of a 30-foot wall. 
You will be given an array of strings that must be parsed as numbers, 
representing the initial height of mile-long sections of the wall, in feet. 
Each section has its own construction crew that can add 1 foot of height per day by using 195 cubic yards of concrete. 
All crews work simultaneously (see examples), meaning all sections that aren’t completed 
(are less than 30 feet high) grow by 1 foot every day. When a section of the wall is complete, its crew is relieved. 
Your program needs to keep track of how much concrete is used daily until the completion of the entire wall.
At the end, print on a single line, separated by comma and space, the amount of concrete used each day, and on a second line, 
the final cost of the wall. One cubic yard of concrete costs 1900 pesos. 

Input 
Your program will receive an array of strings representing numbers as a parameter. 

Output 
Print on the console on one line the amount of concrete used each day separated by comma and space,
and on a second line, the final cost of the wall.
 
Constraints 
 The wall may contain up to 2000 sections (2000 elements in the initial array) 
 Starting height for each section is within range [0…30] 

Input 
[21, 25, 28] 

Output 
585, 585, 390, 390, 390, 195, 195, 195, 195 
5928000 pesos 

Explanation 
On the first day, all three crews work, each adding 1 foot to their section, 585 cubic yards total (3 x 195).

On the second day, it’s the same with the last section reaching 30 feet and its crew being relieved (marked in green while they don’t work). 

On the third day, only two crews work, using up 390 cubic yards total. 

This continues for 2 more days, with the second section reaching 30 feet. 

In the remaining 4 days, only 1 crew works, using 195 cubic yards every day. 

Over the entire period, 3120 cubic yards of concrete were used, costing 5’928’000 pesos.

And that was for just 3 miles, imagine 2000!

Input
[17] 

Output
195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195 

4816500 pesos 

*/

function buildWall(arr){

    let totalCost = 0;  
    let concreteUsedPerDay = [];
    
    let wallSections = arr.map(Number);
    //concreteUsedPerDay = wallSections.map(Number);

    while(true){
        let buildOn = false;
        let dailyConcrete = 0;
        for(let i=0;i<wallSections.length;i++){
            if(wallSections[i]!==30){
                dailyConcrete+=195;
                wallSections[i]++;
                buildOn = true;
            }
        }

        if(!buildOn){
            break;
        } else {
            concreteUsedPerDay.push(dailyConcrete);
        }

    }

    let totalConcrete = concreteUsedPerDay.reduce((a,b)=>a+b);

    console.log(concreteUsedPerDay.join(', '));
    console.log(totalConcrete*1900 + ' pesos')
}


buildWall(['21', '25', '28']);




