/* 
If Watermelons exist, Firemelons, Earthmelons and Airmelons should also exist. Create classes for The 4 Elemelons.

Create an abstract class for the Elemelons. 
Name it Melon.
The Melon class should be initialized with weight (Number), and melonSort (String). 
The 2 arguments should be public members.

Create classes Watermelon, Firemelon, Earthmelon, Airmelon. 
Each of them should inherit the abstract class Melon and its functionality.
Aside from the abstract functionality, each of the Elemelons should have property elementIndex (Number), 
which is equal to its weight * the string length of its melonSort. The property should have only a getter.
 
All of the classes should hold a toString() function, which returns the following result for them:
“Element: {Water/Fire/Earth/Air}”
“Sort: {elemelonSort}”
“Element Index: {elemelonElementIndex}”

Create one more class which is called Melolemonmelon, which inherits one of the 4 elemelons, regardless of which. 
The Melolemonmelon has no element, but it can morph into any of the others. 
Implement a function morph(), which changes the current element of the Melolemonmelon, each time it is called. 
Upon initialization, the initial element is Water. 
From then it should go in the following order: Fire, Earth, Air, Water, Fire… and so on.
The toString() function should remain the same as its parent class.

To create an abstract class you must make sure that that class cannot be instantiated directly.
Put the following code in the constructor of the Melon class, before all else.

melon.js

class Melon {
    constructor(weight, melonSort) {
        if (new.target === Melon) {
            throw new TypeError("Abstract class cannot be instantiated directly");
        }

        //TODO: initialize weight and melonSort properties
    }
}
*/

function melons() {

    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this.weight = Number(weight);
            this.melonSort = melonSort;
            this.element = '';
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            let result = `Element: ${this.element}\n`;
            result += `Sort: ${this.melonSort}\n`;
            result += `Element Index: ${this.elementIndex}`;
            return result;
        }
    }


    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Fire';
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Earth';
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Air';
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elements = ['Fire', 'Earth', 'Air', 'Water'];
            this.element = 'Water';
        }

        morph() {
            let el = this.elements.shift(1);
            this.element = el;
            this.elements.push(el);
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Airmelon,
        Earthmelon,
        Melolemonmelon
    };
}

// does not work localy with the function wrap
let Melon = melons.Melon;
let Watermelon = melons.Watermelon;
let Firemelon = melons.Firemelon;
let Airmelon = melons.Airmelon;
let Earthmelon = melons.Earthmelon;
let Melolemonmelon = melons.Melolemonmelon;

try {
    let test = new Melon(100, "Test");
} catch (err) {
    console.log(err.message);
}
//Throws error


let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100

let morphable = new Melolemonmelon(20, "KingsizePlus");
console.log(morphable.toString());
morphable.morph();
console.log(morphable.toString());
morphable.morph();
console.log(morphable.toString());
morphable.morph();
console.log(morphable.toString());
morphable.morph();
console.log(morphable.toString());