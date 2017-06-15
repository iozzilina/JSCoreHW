// Write a JS function that automatically fills a form for a lazy client. The client will give you 3 elements of data about himself – his username, his email, and his phone number. After those 3 elements you will be given the form, as text, with several placeholders in it. You must replace each valid placeholder with its corresponding value. The placeholders have special symbols and can contain only English alphabet letters. There are 3 types of valid placeholders:
// •	<!{letters}!> - put the given username in place of this
// •	<@{letters}@> - put the given email in place of this
// •	<+{letters}+> - put the given email in place of this
// The input comes as four string arguments and an array of strings. The first 3 arguments will represent the username, the email and the phone number. Each element of the array will represent a sentence, if you find a placeholder somewhere in those sentences you should replace it.
// The output should be printed on the console. The output should consist of all sentences, printed again, this time with their placeholders replaced with the actual data.

// Input
// 'Pesho',
// 'pesho@softuni.bg',
// '90-60-90',
// ['Hello, <!username!>!',
//  'Welcome to your Personal profile.',
//  'Here you can modify your profile freely.',
//  'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
//  'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
//  'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
// Output
// Hello, Pesho! 
// Welcome to your Personal profile. 
// Here you can modify your profile freely. 
// Your current username is: Pesho. Would you like to change that? (Y/N)
// Your current email is: pesho@softuni.bg. Would you like to change that? (Y/N)
// Your current phone number is: 90-60-90. Would you like to change that? (Y/N)


function fillForm(username,email,phone,form){

    form.forEach(line=>{
        line = line.replace(/<![a-zA-Z]+!>/g,username);
        line = line.replace(/<@[a-zA-Z]+@>/g,email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g,phone);
        console.log(line);
    })
}



function fillFormSmart(username,email,phone,form){    
    form.forEach(line=>{
                line = line.replace(/<([!@+])[a-zA-Z]+([!@+])>/g,repl);        
        console.log(line);
    })

    function repl(match,p1){

        //magic!
        //console.log(arguments);
        
        switch(p1){
            case '!' : return username;
            case '@' : return email;
            case '+' : return phone;
        }
    }
}


fillForm('Pesho','pesho@softuni.bg','90-60-90',['Hello, <!username!>!',
 'Welcome to your Personal profile.',
 'Here you can modify your profile freely.',
 'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
 'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
 'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);

 fillFormSmart('Pesho','pesho@softuni.bg','90-60-90',['Hello, <!username!>!',
 'Welcome to your Personal profile.',
 'Here you can modify your profile freely.',
 'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
 'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
 'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);


