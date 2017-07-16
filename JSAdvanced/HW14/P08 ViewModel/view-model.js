/* 
Do you remember the sharedObject problem from unit testing, we're going to build upon the idea 
and create an object that ensures a set of DOM elements and a JS object share the same state.

We need to create a class Textbox that represents one or more HTML input elements with type="text". 
The constructor takes as parameters a selector and a regex for invalid symbols. 

Textbox elements created from the class should have:
•	public property value (has getters and setters) 
•	private property _elements containing the set of elements matching the selector
•	public getter elements for the private _elements property
•	private property _invalidSymbols - a regex used for validating the textbox value
•	method isValid() - if the _invalidSymbols regex can be matched in the 
    current textbox value return false, otherwise return true.

All _elements values and the value property should be linked. 
If the value of an element from _elements changes all other elements' values and the 
value property should instantly reflect it, likewise should happen if the value property changes. 

Constraints
•	Selectors will always point to input elements with type text. 

Submit in the judge ONLY the code for your Textbox class.
Hints
•	Pay attention to what event you use, different events trigger on different conditions. 
    You want an event that is directly linked to changes in the value of an input element.
•	Pay close attention to the value of this when writing event handler functions.

*/

class Textbox {
    constructor(selector,regex){
        this._elements = $(selector);
        this.value = $(this._elements[0]).val();
        this._invalidSymbols = regex;
        this.onInput();
    }

    get elements(){
        return this._elements;
    }

    set value(value){
        this._value = value;
        for(let el of this._elements){
            $(el).val(value);
        }
    }

    get value(){
        return this._value;
    }
    
    isValid(){
        return !this._invalidSymbols.test(this.value);
    }

    // arrow functions to not keep context. "this" in the arrow function will point to the Class, not to the Function it is in.
    onInput(){        
        this.elements.on('input', (event) => {
            let text = $(event.target).val();
            this.value = text;
        });
    }

    // we can clone the this of the class before we start another function, so we can refer to it.
    onInput2(){
        let classThis = this;
        this.elements.on('input', function () {
            let text = $(this).val();
            classThis.value = text;
        });
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value +' '+ textbox.isValid())});
