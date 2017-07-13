/* 

You need to write an IIFE that results in an object containing two properties Card 
which is a class and Suits which is an object that will hold the possible suits for the cards.

The Suits object should have exactly these 4 properties:
•	SPADES: ♠
•	HEARTS: ♥
•	DIAMONDS: ♦
•	CLUBS: ♣
Where the key is SPADES, HEARTS e.t.c. and the value is the actual symbol ♠, ♥ and so on.

The Card class should allow for creating cards, each card has 2 properties face and suit. 
The valid faces are the following ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"] 
any other are considered invalid.

The Card class should have setters and getters for the face and suit properties, 

when creating a card or setting a property validations should be performed, if an invalid face 
or a suit not in the Suits object is passed an Error should be thrown.
Code Template

You are required to write and submit an IIFE which results in an object containing the above-mentioned
Card and Suits as properties. Here is an example template you can use: 

cards.js
(function(){

    // TODO

    return {
        Suits:Suits,
        Card:Card
    }
}())
*/
let result = (function(){

let Suits = {
    SPADES: '\u2660',//(♠)
    HEARTS: '\u2665',//(♥)
    DIAMONDS: '\u2666',// (♦)
    CLUBS: '\u2663'//(♣)
};

class Card{
    constructor(face,suit){
        this.face = face;
        this.suit = suit;
    }
    
    toString(){
        return this.face+this.suit;
    }

    set face(value){        
        const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        if(validFaces.includes(value)){
            this._face = value;
        } else {
            throw new Error('invalid face');
        }

    }

    get face(){
        return this._face;
    }

    set suit(value){ 
        let validSuits = Object.keys(Suits).map(k=>Suits[k]);
        //console.log(validSuits);
        if(validSuits.includes(value)){
            this._suit = value;            
        } else {
             throw new Error('invalid suit');
        }
    } 

    get suit(){
        return this._suit;
    }
}

return {
        Suits:Suits,
        Card:Card
};

})()


let Suits = result.Suits;
let Card = result.Card;

let c1 = new Card('10', Suits.DIAMONDS);
//let c1 = new Card("1",Suits.CLUBS);
//let c1 = new Card("2",Suits.Pesho);
//let c1 = new Card("3",'hearts');

console.log(''+c1);