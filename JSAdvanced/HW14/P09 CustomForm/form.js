/* 
Using the Textbox class from last task, create a class Form that takes as parameters elements from class Textbox.

The Form class should follow these requirements:
•	The Form should a private property _element consisting of a div element with class="form".
•	The constructor should be able to take different amount of Textbox objects.
•	The constructor should validate that the objects are indeed of class Textbox, 
    if an invalid parameter is passed an Error should be thrown.
•	In case all passed objects are correct, the Form should append each of them to its _element - in order of receiving them.
•	The Form should have a private property _textboxes containing all textboxes passed in.
•	The Form should have a submit() method, when the submit method is called the following should happen:
    o	The method should set all valid Textboxes (textboxes whose isValid method returns true) 
        borders to "2px solid green" while setting all invalid Textboxes borders to "2px solid red". 
    o	If all Textboxes are valid - returns true, otherwise returns false.
•	The Form should have an attach(selector) method which attaches it to a passed in selector.

Constraints
•	Selectors will always point to input elements with type text.

You need to submit ONLY the IIFE (without the "let result =") which returns 
an object with two properties Textbox and Form representing the above mentioned classes.

*/


let result = (function() {

    
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
        
        onInput(){        
            this.elements.on('input', (event) => {
                let text = $(event.target).val();
                this.value = text;
            });
        }    
    }

  
    class Form {

        constructor(){            
            this._element =$('<div>').addClass('form');
            this.textboxes = arguments; // built-in variable of all passed in values
        }

        get textboxes(){
            return this._textboxes;
        }

        set textboxes(args){
            //first check if the passes values are indeed of the class Textbox
            for(let arg of args){
                if(!arg instanceof Textbox){
                    throw new Error('The given paramenter is not a textbox');
                }                
            }

            this._textboxes = args;
            for(let textbox of this._textboxes){
                for (let el of textbox._elements){
                    this._element.append($(el));
                }
            }
        }

        submit(){
            let allValid = true;
            for(let textbox of this._textboxes){
                if(textbox.isValid()){
                    for(let el of textbox._elements){
                        $(el).css('border', '2px solid green');
                    }
                } else {
                    for(let el of textbox._elements){
                        $(el).css('border','2px solid red');
                    }
                    allValid = false;
                }
            }
            return allValid;
        }

        attach(selector){
            $(selector).append(this._element);
        };
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}())

  let Textbox = result.Textbox;
  let Form = result.Form;
  let username = new Textbox("#username",/[^a-zA-Z0-9]/);
  let password = new Textbox("#password",/[^a-zA-Z]/);
  username.value = "username";
  password.value = "password2";
  let form = new Form(username,password);
  form.attach("#root");
