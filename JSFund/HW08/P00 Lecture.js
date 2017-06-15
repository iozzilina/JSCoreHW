let str = 'i am a JavaScript Developer'

for(let i in str){
        console.log(`str[${i}] -> ${str[i]}`);
}

str.substr(7); //starting at 7, to end //"JavaScript Developer"
str.substr(7,10); //starting at 7, 10 characters //"Javascript"
str.substr(-2); //last 2 chars //"er"
str.substr(-9,3); //startinng at -9, for 3 chars //"dev"

str.substring(7,10); //starting at 7, up to, not including 10 //"Jav";

let stringArray = str.split(' ').filter(c=>c!='');// split into array by space, remove empty entries

let replacedString = str.replace('Java',"jaaaaaava"); //first match only

let removeWhiteSpaceArroundString = str.trim();

