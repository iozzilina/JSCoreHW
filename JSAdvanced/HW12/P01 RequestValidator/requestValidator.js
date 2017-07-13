/* 
Write a JS function that validates an HTTP request object. 
The object has the properties method, uri, version and message.

Your function must receive the object as a parameter and verify that each property meets the following requirements:
•	method – can be GET, POST, DELETE or CONNECT
•	uri – must be a valid resource address or an asterisk (*); a resource address is a combination of 
          alphanumeric characters and periods; all letters are Latin; the URI cannot be an empty string
•	version – can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
•	message – may contain any number of non-special characters; special characters are <, >, \, &, ', "

If a request is valid, return it unchanged. 
If any part fails the check, throw an Error with message 
"Invalid request header: Invalid {Method/URI/Version/Message}". 
Replace the part in curly braces with the relevant word.
Note that some of the properties may be missing, in which case the request is invalid. 
Check the properties in the order in which they are listed here. 
If more than one property is invalid, throw an error for the first encountered.

Input / Output
Your function will receive an object as a parameter. As output, return the same object or throw an Error as described above.

Examples

Input	
validateRequest({
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
});

Output
{    
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
}

Input	
validateRequest({
  method: 'OPTIONS',
  uri: 'git.master',
  version: 'HTTP/1.1',
  message: '-recursive'
});	

Output
Invalid request header: Invalid Method

Input
validateRequest({
  method: 'POST',
  uri: 'home.bash',
  message: 'rm -rf /*'
});	

 Output
 Invalid request header: Invalid Version
 */

 function validateRequest(httpRequest){

    let req = {
        method: httpRequest.method,
        uri: httpRequest.uri,
        version: httpRequest.version,
        message: httpRequest.message
    }

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0'];
    let uriPattern = /(^[a-z0-9\.]*$)|(^\*$)/g;
    let msgPattern = /[<>\\\&'"]/g;

    if(!validMethods.includes(httpRequest.method) || !httpRequest.hasOwnProperty('method')){
        throw new Error("Invalid request header: Invalid Method");
    }    
    if(!uriPattern.test(httpRequest.uri) || !httpRequest.hasOwnProperty('uri')){
        throw new Error("Invalid request header: Invalid URI");
    }
    if(!validVersions.includes(httpRequest.version) || !httpRequest.hasOwnProperty('version')){
         throw new Error("Invalid request header: Invalid Version");
    }
    if(msgPattern.test(httpRequest.message) || !httpRequest.hasOwnProperty('message')){
         throw new Error("Invalid request header: Invalid Message");
    }  
    
    return httpRequest;
 }

console.log(validateRequest({
  method: 'GET',
  uri: 'svn.public.ca1talog',
  version: 'HTTP/1.1',
  message: ''
}));


console.log(validateRequest({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
}));

