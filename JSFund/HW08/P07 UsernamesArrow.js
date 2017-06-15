// Write a JS function that parses a list of emails and returns a list of usernames, generated from them. 
// Each username is composed from 
// the name of the email address,a period and the first letter of every element in the domain name. 

// See the examples for more information.

// The input comes as array of string elements. Each element is an email address.

// The output is printed on the console on a single line as a comma-formatted list.

// Input
// ['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']
// Output
// peshoo.gc, todor_43.mdb, foo.bc

function getUsernames(arr){
    let result = arr.map(s=>s.split('@'));
    usernames = result.map(([user,domain])=>user + '.' + domain.split('.').map(s=>s[0]).join(''));
    
    console.log(usernames.join(', '));
};

getUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);