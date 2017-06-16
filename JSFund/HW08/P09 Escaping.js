// You will be given a list of strings, containing user-submitted data. 
// Write a JS function that prints an HTML list from the data. 
// The strings, however, may contain special HTML characters, 
// which is an oft-used method for injection attacks. 
// To prevent unwanted behavior or harmful content, all special characters need
//  to be replaced with their encoded counterparts – they will look the same to the user,
//  but will not pose a security risk. 
//
// Use the following table to compose your function:
// Raw	Encoded
// <	&lt;
// >	&gt;
// &	&amp;
// "	&quot;
//
// Use the provided HTML template to visually test your code – if you don’t escape the control characters, 
// formatted HTML will show up. Don’t care how the HTML template works. 
//
// Your job is to write the JS escaping function only.
//
// The input comes as array of string elements.
//
// The output is the return value of your function. 
// Compose the list in a string and return it. See the examples for formatting details.

// Input
// ['<b>unescaped text</b>', 'normal text']
//
// Output
// <ul>
//   <li>&lt;b&gt;unescaped text&lt;/b&gt;</li>
//   <li>normal text</li>
// </ul>

function arrayToHtmlList(dataRows){

    let html  = '<ul>\n';

    for(let dataRow of dataRows){
        html+='  <li>' + escapeHTML(dataRow)+'</li>\n';
    }

    html+='</ul>\n';

    console.log(html);

    function escapeHTML(text) {
        let arrHtml = {'&' : '&amp;',  '<':'&lt;', '>':'&gt;', '"':'&quot;', "'": '&#39;'};
        return text.replace(/[&<>\"\']/g, ch => arrHtml[ch]);
    }  
}


arrayToHtmlList(['<b>unescaped text</b>', 'normal text']);
