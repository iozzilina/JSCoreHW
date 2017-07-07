/*
It’s finally the future! 
Robots take care of everything and man has been freed from the mundane tasks of living. 
There is still work to be done though, since those robots need to be programmed first 
– we may have robot chefs, but we don’t yet have robot software developers.

Your task is to write the management software for a breakfast chef robot – 
it needs to take orders, keep track of available ingredients and output an error if something’s wrong. 
Someone else has already installed the cooking instructions, so your module needs to plug into the system 
and only take care of orders and ingredients. And since this is the future and food is printed with n
ano-particle beams, all ingredients are microelements – protein, carbohydrates, fat and flavours. 
The library of recipes includes the following meals:

•	Apple – made with 1 carb and 2 flavour
•	Coke – made with 10 carb and 20 flavour
•	Burger – made with 5 carb, 7 fat and 3 flavour
•	Omelet – made with 5 protein, 1 fat and 1 flavour
•	Cheverme – made with 10 protein, 10 carb, 10 fat and 10 flavour

The robot receives instructions either to restock the supply, cook a meal or report statistics. 
The input consists of one of the following commands:
•	restock <microelement> <quantity> – increases the stored quantity of the given microelement
•	prepare <recipe> <quantity> – use the available ingredients to prepare the given meal
•	report – return information about the stored microelements, 
    in the order described below, including zero elements

The robot is equipped with a quantum field storage, so it can hold an unlimited quantity of ingredients, 
but there is no guarantee there will be enough available to prepare a recipe, 
in which case an error message should be returned. Their availability is checked in the order in which 
they appear in the recipe, so the error should reflect the first requirement which wasn’t met.

Submit a closure that returns the management function. The management function must take one parameter.

Input
Instructions are passed as a string argument to your management function. 
It will be called several times per session, so internal state must be preserved throughout the entire session.

Output
The return value of each operation is one of the following strings:
•	Success – when restocking or completing cooking without errors
•	Error: not enough <ingredient> in stock – when the robot couldn’t muster enough microelements
•	protein={qty} carbohydrate={qty} fat={qty} flavour={qty} – when a report is requested, in a single string

Constraints
•	Recipes and ingredients in commands will always have valid names.

Sample Input	            Sample Output
restock carbohydrate 10     Success
restock flavour 10          Success
prepare apple 1             Success
restock fat 10              Success
prepare burger 1            Success
report                      protein=0 carbohydrate=4 fat=3 flavour=5

*/


let breakfastTime = (function(){

    let robot = {
        protein:0,
        carbohydrate:0,
        flavour:0,
        fat:0
    }

    let products= {
        apple:{
            carbohydrate:1,
            flavour:2
        },
        coke:{            
            carbohydrate:10,
            flavour:20
        },
        burger:{
            carbohydrate:5,
            fat:7,
            flavour:3
        },
        omelet:{
            protein:5,
            fat:1,
            flavour:1
        },
        cheverme:{
            protein:10,
            carbohydrate:10,            
            fat:10,
            flavour:10
        }
    }

    return function(cmdString){
        let cmdData = cmdString.split(' ');
        let command = cmdData[0];

        if(command === 'restock'){
            let microelement = cmdData[1];
            let quantity = Number(cmdData[2]);
            robot[microelement]+=quantity;   
            return 'Success';
        } else if (command === 'report'){
           return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`;    
        } else if (command === 'prepare'){
            let food = cmdData[1];
            let foodQnt = Number(cmdData[2]);

            let foodStats = products[food]; //call up the recipe based on the string selection
            //console.log(food);
            //console.log(foodStats);

            let canProductBeCooked = true;    
            for(let el in foodStats){
                //console.log(`${el} => ${foodStats[el]*foodQnt} ! ${robot[el]}`) ;
                if(foodStats[el]*foodQnt>robot[el]){
                    canProductBeCooked = false;
                    return `Error: not enough ${el} in stock`;                           
                }
            }

            if(canProductBeCooked){
                for(let el in foodStats){               
                  robot[el]-=foodStats[el]*foodQnt;                  
                } 
                return 'Success';
            }
        }
    };

})()


console.log(breakfastTime('restock carbohydrate 10'));
console.log(breakfastTime('restock flavour 10 '));
console.log(breakfastTime('prepare apple 1'));
console.log(breakfastTime('restock fat 10'));
console.log(breakfastTime('prepare burger 1'));
console.log(breakfastTime('report'));


