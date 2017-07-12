/*

Extend the build-in String object with additional functionality. Implement the following functions:
•	ensureStart(str) – append str to the beginning of a string, only if it’s not already present
•	ensureEnd(str) – append str to the end of a string, only if it’s not already present
•	isEmpty() – return true if the string is empty, false otherwise
•	truncate(n) – truncates the string to n characters by removing words and appends an ellipsis
    (three periods) to the end. If a string is less than n characters long, return the same string. 
    If it is longer, split the string where a space occurs and append an ellipsis to it so that the total length 
    is less than or equal to n. If no space occurs anywhere in the string, return n – 3 characters and an ellipsis.
    If n is less than 4, return n amount of periods.
•	format(string, …params) – static method to replace placeholders with parameters. 
    A placeholder is a number surrounded by curly braces. If parameter index cannot be found for a 
    certain placeholder, do not modify it. Note static methods are attached to the String object instead
    of it’s prototype. See the examples for more info.
Note strings are immutable, so your functions will return new strings as a result.

Input / Output

Your main code should be structured as an IIFE without input or output – 
it should modify the existing String prototype instead.

Input and output of the extension functions should be as described above.


*/


(function StringExtension(){

    String.prototype.ensureStart = function (str){
        let result;
        return result;
    }

    String.prototype.ensureEnd = function (str){
        let result;
        return result;
    }

    String.prototype.isEmpty = function (){
        let result;
        return result;
    }


    String.prototype.truncate = function (n){
        let result;
        return result;
    }

     String.prototype.format = function (string, ...params){
        let result;
        return result;
    }



})();