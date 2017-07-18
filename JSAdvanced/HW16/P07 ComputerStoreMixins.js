/* 
You need to implement the class hierarchy for a computer business, here are the classes you should create and support:

•	Keyboard  - concrete class that contains:
    o	manufacturer - string property for the name of the manufacturer.
    o	responseTime - number property for the response time of the Keyboard.

•	Monitor - concrete class that contains:
    o	manufacturer - string property for the name of the manufacturer.
    o	width - number property for the width of the screen.
    o	height - number property for the height of the screen.

•	Battery - concrete class that contains:
    o	manufacturer - string property for the name of the manufacturer.
    o	expectedLife - number property for the expected years of life of the Battery.

•	Computer - abstract class that contains:
    o	manufacturer - string property for the name of the manufacturer.
    o	processorSpeed - a number property containing the speed of the processor in GHz.
    o	ram - a number property containing the RAM of the computer in Gigabytes.
    o	hardDiskSpace - a number property containing the hard disk space in Terabytes.

•	Laptop - concrete class extending the Computer class that contains:
    o	weight - a number property containing the weight of the Laptop in Kilograms.
    o	color - a string property containing the color of the Laptop.
    o	battery - an instance of the Battery class containing the Laptop's battery. 
        There should be a getter and a setter for the property and validation that the 
        passed in argument is actually an instance of the Battery class.

•	Desktop - concrete class extending the Computer class that contains:
    o	keyboard - an instance of the Keyboard class containing the Desktop PC's Keyboard. 
        There should be a getter and a setter for the property and validation that the 
        passed in argument is actually an instance of the Keyboard class.
    o	monitor - an instance of the Monitor class containing the Desktop PC's Monitor.
        There should be a getter and a setter for the property and validation that the 
        passed in argument is actually an instance of the Monitor class.

Attempting to instantiate an abstract class should throw an Error, 
attempting to pass an object that is not of the expected instance 
(ex. an object that is not an instance of Battery to the laptop as a battery) should throw a TypeError.

Example
template.js
function createComputerHierarchy() {
    //TODO



    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

You are asked to submit ONLY the function that returns an object containing the above mentioned classes.
Bonus:
In order to achieve a better code reuse, it's a good idea to have a base abstract class containing
common information - check the classes, what common characteristics do they share that can be grouped in a common base class.
 
+++++++

Using the classes from the last task, write two mixins (functions which attach some functionality 
to passed in classes' prototypes) to extend their functionality. You need to support the following mixins:

•	computerQualityMixin(classToExtend)  - a function that attaches the following functions
        to the prototype of the passed in class. 
    o	getQuality() - returns a number equal to the computer's (processorSpeed + RAM + hardDiskSpace) / 3.
    o	isFast() - if processorSpeed > (ram / 4) returns true, otherwise false.
    o	isRoomy() - if hardDiskSpace  > Math.floor(ram * processorSpeed) returns true, otherwise false.

•	styleMixin(classToExtend) - a function that attaches the following functions to the prototype of the passed in class:
    o	isFullSet() - if the computer's manufacturer, keyboard's manufacturer and monitor's
        manufacturer all have the same name returns true, otherwise false.
    o	isClassy() - if the computer battery's expectedLife is 3 years or more and the 
        computer's color is either "Silver" or "Black" and the computer's weight is less than 
        3 kilograms returns true, otherwise returns false.
*/



//function createComputerHierarchy() {
    class Component{
        constructor(manufacturer){
            if(new.target === Component){
                throw new Error('Cannot instantiate abstact classes directly');
            }
            this.manufacturer = manufacturer;
        }
    }

    class Battery extends Component{
        constructor(manufacturer,expectedLife){
            super(manufacturer);
            this.expectedLife = Number(expectedLife);
        }
    }

    class Keyboard extends Component{
        constructor(manufacturer,responseTime){
            super(manufacturer);
            this.responseTime = Number(responseTime);
        }
    }

    class Monitor extends Component{
        constructor(manufacturer,width,height){
            super(manufacturer);
            this.width = Number(width);
            this.height = Number(height);    
        }
    }

    class Computer extends Component{
        constructor(manufacturer, processorSpeed,ram,hardDiskSpace){
            if(new.target === Computer){
                throw new TypeError('Cannot instantiate abstact classes directly');
            }

            super(manufacturer);
            this.processorSpeed = Number(processorSpeed); //GHz.
            this.ram = Number(ram); //Gigabytes
            this.hardDiskSpace = Number(hardDiskSpace);//Terabytes
        }
    }     


    class Laptop  extends Computer {

        constructor(manufacturer, processorSpeed,ram,hardDiskSpace,weight,color,battery){
            super(manufacturer, processorSpeed,ram,hardDiskSpace);
            this.weight = Number(weight);//Kilogram
            this.color = color;
            this.battery = battery;
        }

        set battery(value){
            if(value instanceof Battery){
                this._battery = value;
            } else{
                throw new TypeError("Incorect paramenter: Battery");
            }
            
        }

        get battery(){
            return this._battery;
        } 
    }


    class Desktop extends Computer{

        constructor(manufacturer, processorSpeed,ram,hardDiskSpace,keyboard,monitor){
            super(manufacturer, processorSpeed,ram,hardDiskSpace);         
           
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard(){
            return this._keyboard;            
        }

        set keyboard(value){
            if(value instanceof Keyboard){
                this._keyboard = value;
            } else{
                throw new TypeError("Incorect paramenter: Keyboard");
            }            
        }

        get monitor(){
            return this._monitor;            
        }

        set monitor(value){
            if(value instanceof Monitor){
               this._monitor = value;
            } else {
               throw new TypeError("Incorect paramenter: Monitor");
            }
            
        } 
    }

function mixins(){

    function computerQualityMixin(classToExtend){

        // - returns a number equal to the computer's (processorSpeed + RAM + hardDiskSpace) / 3.
        classToExtend.prototype.getQuality = function(){
            return (this.processorSpeed + this.ram + this.hardDiskSpace)/3;

        }
        
        // - if processorSpeed > (ram / 4) returns true, otherwise false.
        classToExtend.prototype.isFast = function(){
            return ths.processorSpeed > (this.ram/4);
        } 

        // - if hardDiskSpace  > Math.floor(ram * processorSpeed) returns true, otherwise false.
        classToExtend.prototype.isRoomy = function(){
            return this.hardDiskSpace > Math.floor(this.ram*this.processorSpeed);
        } 
    } 

    function styleMixin(classToExtend) {
        //if the computer's manufacturer, keyboard's manufacturer and monitor's manufacturer all have the same name returns true, otherwise false.
        classToExtend.prototype.isFullSet = function(){
            return this.manufacturer == this.keyboard.manufacturer && this.keyboard.manufacturer === this.monitor.manufacturer;
        }

        //isClassy() - if the computer battery's expectedLife is 3 years or more and the 
        //computer's color is either "Silver" or "Black" and the computer's weight is less than 
        //3 kilograms returns true, otherwise returns false.
        classToExtend.prototype.isClassy = function(){
            let validColors = ['Silver','Black'];
            return this.battery.expectedLife>=3 && validColors.includes(this.color) && this.weight<3;
        }   
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}
    	

//     return {
//         Battery,
//         Keyboard,
//         Monitor,
//         Computer,
//         Laptop,
//         Desktop
//     }
// }


let keyboard = new Keyboard('Logitech', 70);
let monitor = new Monitor('Benq', 28, 18);
let battery = new Battery('sisco',5);

let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 2, "Silver", battery);
console.log(laptop);

styleMixin(Laptop);

console.log(laptop.isClassy());

//module.exports={createComputerHierarchy};