/*
Write a JS program that sequentially displays articles on a web page when the user 
clicks a button. You will receive an array of strings that will initialize the program. 
You need to return a function that keeps the initial array in its closure and every time it’s
called, it takes the first element from the array and displays it on the web page, 
inside a div with ID "content". If there are no more elements left, your function 
should do nothing.
*/

function getArticleGenerator(articles) {    

    let articlesToPrint = Object.assign([], articles);// out the element in a closure
    
    return function() {
        if(articlesToPrint.length>0){
            let article = $('<article>');
            article.append($(`<p>${articlesToPrint.shift()}</p>`));
            $('#content').append(article);
        }
    };


}


