/*Write a JS program that receives data about a quiz and prints it formatted as an XML document. 
The data comes as pairs of question-answer entries. 
The format of the document should be as follows:
XML
<?xml version="1.0" encoding="UTF-8"?>
<quiz>
  <question>
    {question text}
  </question>
  <answer>
    {answer text}
  </answer>
</quiz>
The input comes as an array of string elements.
The output should be printed on the console.

Examples

Input
["Who was the forty-second president of the U.S.A.?",
"William Jefferson Clinton"]

Output
<?xml version="1.0" encoding="UTF-8"?>
<quiz>
  <question>
    Who was the forty-second president of the U.S.A.?
  </question>
  <answer>
    William Jefferson Clinton
  </answer>
</quiz>*/

function quiz(arr){

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml +='<quiz>\n'

    for(let i = 0; i <arr.length; i+=2){
        let question = arr[i];
        let answer = arr[i+1];
        xml+=formatPair(question, answer);        
    }
     xml +='</quiz>'    

     return xml;


    function formatPair(q,a){
        pair = `  <question>\n    ${q}\n  </question>\n`;
        pair +=`  <answer>\n    ${a}\n  </answer>\n`
        return pair;
    }   
}

quiz(["Dry ice is a frozen form of which gas?","Carbon Dioxide","What is the brightest star in the night sky?","Sirius"]);



