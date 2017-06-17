/*
Your best friend Stamat is studying Bulgarian philology and he has to write essays all the time. 
Because you want to spent more time with him you decide to help him with his homework. 

You know that his teacher is super cocky about formatting a document so you want to create a simple text editor program, 
which will reformat a given text, based on some simple rules. 

Write a JS program that detects bad formatting in a text and fixes it. The resulting text must follow these rules: 
 Having a single space (" ") only after every one of those symbols: ".,!?:;" is obligatory. 
 Having one or more spaces (" ") before every one of those symbols: ".,!?:;" is forbidden. 
 Sequences like ".  . . !" should be displayed as "...!" 
 If there is a dot (".") followed by spaces, then by any digit(s) this means that the text might 
   be a number or a date – make sure that there are no following spaces after the dot. 
 A text inside of quotes should be trimmed (e.g. " text    "  "text") 

Apply the rules in the same order that they are given above. 

Input will be passed as single string parameter representing the text to format/edit. 

Input 
The input data is passed to your function as an array, containing a single string element. 

Output 
Print on the console the edited text. 
Constraints 
 The text inside of the quotes can contain any ASCII symbol but quote (") 

Examples 

Input 
Terribly formatted text      .  With chaotic spacings." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 . 
Output 
Terribly formatted text. With chaotic spacings. "Terrible quoting"! Also this date is pretty confusing: 20.12.16.  

Input 
Make,sure to give:proper spacing where is needed... ! 
Output 
Make, sure to give: proper spacing where is needed...! 
*/

function formatText(arr){
    let text = arr[0];
    let finalText = text;

    finalText = finalText.replace(/([\.\,\!\?\:\;]{1})(\s*)/g, repl01);
    //console.log('orig: ' + text)
    //console.log(' 01 : ' + finalText);
    finalText = finalText.replace(/(\s*)([\.\,\!\?\:\;]{1})/g, repl02);
    //console.log(' 02 : ' + finalText);
    finalText = finalText.replace(/\.\s*\.\s*\./g, repl03);
    //console.log(' 03 : ' + finalText);
    finalText = finalText.replace(/\.\s*(\d+)/g, repl04);
    //console.log(' 04 : ' + finalText);
    finalText = finalText.replace(/\"([\s]*)(.*?)([\s]*)\"/g, repl05);
    //console.log(' 05 : ' + finalText);

    console.log(finalText);

    function repl01(match, p1){  
        return p1+' ';
    }

    function repl02(match, p1, p2){
        return p2;
    }

    function repl03(match, p1,p2,p3){
          return '...';
    }

    function repl04(match, p1){
        return `.${p1}`;
    }

    function repl05(match, p1,p2,p3){
        return `"${p2}"`;
    }
}


formatText(['Terribly formatted text   . .. !      With chaotic spacings." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 . ']);

formatText(['Make, sure to give: proper spacing where is needed...!']);

formatText(['Okey             , now useless        ; spacing everywhere! It would be really      ,   bad if this test: fails!   |:/']);
formatText(['']);
formatText(['']);
