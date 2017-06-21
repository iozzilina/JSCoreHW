//test for correct open/ close tags
//^(<message.+>)(.+)(<\/message>)$

//extract attributes
//(\s([a-z]+)\=\"([\w\s\.]+)\")

function XMLParser(str){

    //console.log(str);

    strEscaped = str.replace(/\n/g,'</p><p>');

    //console.log(strEscaped);

    //excape the string
    //regex check if valid open/close tags
        
    let validateOpenAndCloseTags = new RegExp(`^(<message.*?>)(.*)(<\/message>)$`);
    //regex.exec(str);

    if(validateOpenAndCloseTags.test(strEscaped)){
        //console.log('Valid');
        
        let match = validateOpenAndCloseTags.exec(strEscaped);
        //console.log(match);

        let openTag = match[1];
        let message = match[2];
        let closingTag = match[3];

        // check validity of open tags
        //console.log('open-> ' + openTag);
        let openTagleftOvers = match[1];
        openTagleftOvers = openTagleftOvers.replace(/message/, '')
        //console.log(openTagleftOvers);
        
        let sender = '';
        let recipient = ''; 

        let extractAttributes = /(([a-z]+)\=\"([\w\s\.]+)\")/g;

        let att = extractAttributes.exec(openTag.toString());
       
        while(att!==null){
            //console.log('attribute -> ' + att);  
            if(att[2]=="to"){
                recipient = att[3];
            }
            if(att[2]=="from"){
                sender = att[3];
            }

            openTagleftOvers = openTagleftOvers.replace(att[1],'');
            //console.log(openTagleftOvers);
            att = extractAttributes.exec(openTag.toString());    
        }
        openTagleftOvers = openTagleftOvers.replace(/\s*/g,'');  
        //console.log(openTagleftOvers);

        if(openTagleftOvers!=='<>'){
            console.log("Invalid message format");
            return;
        }

        if(sender ==='' || recipient===''){
            console.log("Missing attributes");
            return;
        }
        
        //console.log('text-> ' + message);
        //console.log('close->' + closingTag);

        message = message.replace(/<\/p><p>/g,'</p>\n    <p>');
        //console.log('text-> ' + message);

        let html = `<article>\n`;
            html+= `  <div>From: <span class="sender">${sender}</span></div>\n`;      
            html+= `  <div>To: <span class="recipient">${recipient}</span></div>\n`;
            html+= `  <div>\n`;
            //for cycle for \n -> makes new paraphraph //not needed with current implementation
            html+= `    <p>${message}</p>\n`; 
            html+= `  </div>\n`;  
            html+= `</article>\n`;  
  
        console.log(html);
        return;
    }

    console.log("Invalid message format");  
    //Missing attributes
}

///*
XMLParser(`<message from="Alice" timestamp="1497254112">Same old, same old</message>`);
//*/
//

/*
XMLParser(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old\nLet's go out for a beer</message>`);
*/
//

/*
XMLParser(`<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>`);
*/
//

/*
XMLParser(`<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>`);
*/
//



