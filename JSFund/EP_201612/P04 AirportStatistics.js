/*
Problem 4 – Airport Statistics 
You started to work in company that outsources software. 
Recently the company was contracted to create a software for the new airport that is going be built in your town. 
Since you have just started, you received a simple task: create a program that generates statistics of the arrival/departure flights. 

Write a JS program that aggregates information about airplane traffic to and from an airport. 
You will receive an array of strings in the following format: 
{planeID} {town} {passengersCount} {action} 
 planeID – the ID of the plane 
 town – name of the town, which the plane is coming from, or the town the plane is going to 
 passerngersCount – the number of passengers on the plane (this element must be parsed as Number) 
 action – could be either "land" or "depart" 

Store in your program the IDs of planes that land and remove them when they depart. 
If a plane is landing (indicated by its action), then the passengers on it are arrivals to our airport. 
If it’s departing, then the passengers are departures. 

Some of the records will not be valid! 
To be considered valid, a record must meet the following criteria: 
 A plane can depart only if it landed first. 
 A plane cannot land again if it’s already landed – it must depart between landings. 
 The same plane can land and depart multiple times (see the examples). 

If any of the above rules is not followed ignore that input string. 

Your program should generate a report containing:  
 The IDs of planes that remain at our airport (their last valid action is land). 
   Sort them alphabetically. 
 A list of towns with the number of arrivals and departures for each town, and all unique IDs of the planes that made the flights. 
  Sort the towns by the number of arrivals (descending). 
  If two towns have the same number, sort them alphabetically by name (ascending). 
  Sort the list of planes for each town alphabetically. 

See the examples for formatting details. 
Note the default behavior of Array.sort() in JavaScript will sort by ASCII code, which is not the same as alphabetical. 

Input 
Data is passed to your program as an array of strings in the format described above. 

Output 
Print on the console the aggregated data, sorted as described above, formatted as seen in the examples. 

Constraints 
 The input will always be in the specified formats. There is no need to check it explicitly. 
 Plane IDs can consist of any alphanumeric character. 

Input:
[  
"Boeing474 Madrid 300 land",  
"AirForceOne WashingtonDC 178 land",
"Airbus London 265 depart", 
"ATR72 WashingtonDC 272 land",
"ATR72 Madrid 135 depart" 
]

Output:
Planes left: 
- AirForceOne 
- Boeing474 
WashingtonDC 
Arrivals: 450 
Departures: 0 
Planes: 
-- AirForceOne 
-- ATR72 
Madrid 
Arrivals: 300 
Departures: 135 
Planes: 
-- ATR72 
-- Boeing474


Explanation:
Boing474 landed with 300 passengers from Madrid. 
Later on, ART72 departed, flying to Madrid with 135 passengers. 
From WashingtonDC there were two planes that landed with total of 450 passengers. 
Airbus cannot depart, since it did not land beforehand

*/

function airportStatistics(records){

    let airport = new Map();
    let destinationData  = new Map();
    let destinationPlanes = new Map();

    
    for(let record of records){
        //console.log(record);

        let [planeID,town,passengersCount,action] = record.split(' ');

        passengersCount = Number(passengersCount);
        //if(passengersCount <0){
        //    continue;
        //}

        if(action == 'land'){
            if(airport.has(planeID)){
                continue;
            } else {
                airport.set(planeID, 'land');
            }

            if(!destinationData.has(town)){
                destinationData.set(town,[0,0]);
            }

            if(!destinationPlanes.has(town)){
                destinationPlanes.set(town, new Set());
            }

            destinationData.get(town)[0] +=passengersCount;
            destinationPlanes.get(town).add(planeID);
        } 

        else {
            //if that plane has previously landed, it can depart
            if(airport.has(planeID)){
                airport.delete(planeID);
            } else {
                continue;
            }

            if(!destinationData.has(town)){
                destinationData.set(town,[0,0]);
            }

            if(!destinationPlanes.has(town)){
                destinationPlanes.set(town, new Set());
            }

            destinationData.get(town)[1] += passengersCount;
            destinationPlanes.get(town).add(planeID);
        }

    }

    //console.log(airport);
    //console.log(destinationData);
    //console.log(destinationPlanes);

 
        let sortedAirport = [...airport.entries()];

        sortedAirport = sortedAirport.sort((a,b) => a[0].localeCompare(b[0]))
        console.log("Planes left:")
        for(let plane of sortedAirport){
            console.log(`- ${plane[0]}`)
        }       
   

    let sortedTowns = [...destinationData.entries()].sort(townSort);

    for(let [town,statistics] of sortedTowns){
        console.log(town);
        console.log(`Arrivals: ${statistics[0]}`);
        console.log(`Departures: ${statistics[1]}`);

        let sortedPlanes = [...destinationPlanes.get(town).values()].sort((a,b) => a.localeCompare(b));
        console.log('Planes:');
        for(let plane of sortedPlanes){
            console.log(`-- ${plane}`);
        }
    }
    
    function townSort(a, b){
        let aArrivals = a[1][0];
        let bArrivals = b[1][0];

        let firstCriteria = bArrivals - aArrivals;
        if(firstCriteria !== 0)
        {
            return firstCriteria;
        } else {
            return a[0].localeCompare(b[0]);
        }
    }  
}

/*
airportStatistics([  
"Boeing474 Madrid 300 land",  
"AirForceOne WashingtonDC 178 land",
"Airbus London 265 depart", 
"ATR72 WashingtonDC 272 land",
"ATR72 Madrid 135 depart" 
]);
*/


/*
airportStatistics([ 
'Airbus0 London 150 land',
'Airbus1 Amsterdam 350 land',
'Airbus Bologna 350 land',
'Airbus2 Tokyo 0 land',
'Airbus3 AbuDhabi 350 land',
'Airbus4 Monaco 150 land',
'Airbus5 NewYork 0 land',
'Airbus6 Paris 0 land',
'Airbus7 Madrid 0 land',
'Airbus8 Bukurest 0 land',
'Airbus9 LasVegas 200 land',
'Airbus1 Amsterdam 350 depart',
'Airbus Bologna 350 depart',
'Airbus3 AbuDhabi 350 depart',
'Airbus0 London 150 depart',
'Airbus4 Monaco 150 depart',
'Airbus5 Monaco -1 depart',
'Airbus6 Paris -10 land',
'Airbus7 Sofia 230 depart',
'Airbus7 Monaco 200 depart',
'Airbus9 Sofia 340 land',
]);
*/

/*
airportStatistics([ 
'Airbus Paris 100 land',
'AirForce Paris 200 land',
'Airbus Paris -300 land',
'AirForcE Paris 100 land',
'AirForce London 100 land',
'AirFoRce LoNdon 130 land',
'Nemibue London 150 land',
'Nemibue London 150 depart',
]);
*/

airportStatistics([ 
'Airbus London 100 land',
'Airbus Paris 200 depart',
'Airbus Madrid 130 depart',
'Airbus Lisbon 403 depart',
'Airbus Moscow 505 depart',
'Airbus Sofia 16 depart',
]);