/*
Write a JS function that takes a deck of cards as a string array and prints 
them as a sequence of cards (space separated). Print "Invalid card: [card]" 
when an invalid card definition is passed as input. Use the solution from 
the previous task to generate the cards.

Input / Output
The function must take an array of strings as parameter. 
As output, print on the console the list of cards as strings, 
separated by space.

Submit a function that contains the makeCard factory function and other logic.

*/


function printDeckOfCards(cards){

    function makeCard(face,suit){
        const validFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const validSuits = ['S','H','D','C']

        if(!validFaces.includes(face)){
            throw new Error("Invalid Face");
        }
        if(!validSuits.includes(suit)){
            throw new Error("Invalid Suit");
        }

        let card = {
            face: face,
            suit: suit,
            toString: ()=> {
                let suitSymbols = {
                    'S':'\u2660',
                    'H':'\u2665',
                    'D':'\u2666',
                    'C':'\u2663'
                };

                return card.face+suitSymbols[card.suit];
            }
        }

        return card;
    }

    let deck = [];

    
    for(let card of cards){
    let f = card.substr(0,card.length-1);
    let s = card[card.length-1];
    
    try{
        deck.push(makeCard(f,s));      
    } 
    catch (err){
        console.log(`Invalid card: ${card}`);
        return;
        }
    }    
    
    console.log(deck.join(' '));
}



printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);