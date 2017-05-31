//Write a JS function that composes an HTML image tag.
//The input comes as an array of string elements. 
//The first element is the location of the file and the second is the alternate text.
//The output should be printed to the console in the following format:
//<img src="{file location}" alt="{alternate text}">

function imageTag(params){
    let result = `<img src="${params[0]}" alt="${params[1]}">`;
    return result;
}
