function checkFood(food){
   //let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
   //let veggies = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

   switch (food){
       case 'banana' :
       case 'apple' :
       case 'kiwi' :
       case 'cherry' :
       case 'lemon' :
       case 'grapes' :
       case 'peach' :
        console.log('fruit');
        break;


        case 'tomato' :
        case 'cucumber' :
        case 'pepper' :
        case 'onion' :
        case 'garlic' :
        case 'parsley' :
        console.log('vegetable');
        break;

        default:
        console.log('unknown');
   }
} 

