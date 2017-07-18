/* 
Your need to create several classes for Posts.

Implement a class Post, which is initialized with a title (String) and content (String). 
The 2 arguments should be public members.

The Post class should also have toString() function which returns the following result:
“Post: {postTitle}”
“Content: {postContent}”

Implement another class which is called SocialMediaPost, which inherits the Post class.

The SocialMediaPost class should be initialized with 2 additional arguments – likes (Number) and dislikes (Number). 
The SocialMediaPost class should hold an array of comments (Strings), and a function addComment(comment), 
which adds comments to that array.
The SocialMediaPost class should extend the toString() function of the Post class, 
and should return the following result:
“Post: {postTitle}”
“Content: {postContent}”
“Rating: {postLikes – postDislikes}”
“Comments:”
“ * {comment1}”
“ * {comment2}”
. . .
In case there are no comments, return information only about the title, content and rating of the post.

Implement another class which is called BlogPost, which inherits the Post class.

The BlogPost class should be initialized with 1 additional arguments – views (Number).
The BlogPost class should hold a function view(), which increments the views of the object with 1, 
every time it is called. The function should return the object, so that chaining is supported.
The BlogPost class should extend the toString() function of the Post class,
and should return the following result:
“Post: {postTitle}”
“Content: {postContent}”
“Views: {postViews}” */

// posts.js
// let post = new Post("Post", "Content");

// console.log(post.toString());

// // Post: Post
// // Content: Content

// let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");

// console.log(scm.toString());

// // Post: TestTitle
// // Content: TestContent
// // Rating: -5
// // Comments:
// //  * Good post
// //  * Very good post
// //  * Wow!

//Submit in the judge a function (NOT IIFE), which holds all classes, and returns them as an object.

//function solve(){
    class Post{
        constructor(title,content){
            this.title = title;
            this.content = content;
        } 

        toString() {
        return `Post: ${this.title}\nContent: ${this.content}` ;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content);
            this.likes=likes;
            this.dislikes=dislikes; 
            this.comments=[]; 
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let base = super.toString();
            let rating = `Rating: ${this.likes - this.dislikes}`;            
            let cmts = '';
            if(this.comments.length>0){
                cmts +='\nComments:';
                for(let cmnt of this.comments){
                    cmts+='\n * '+cmnt;
                }
            }
            return base +'\n'+rating+cmts;
        }
    }

    class BlogPost extends Post{

        constructor(title,content,views){
            super(title,content);
            this.views=views;           
        }
        
        view(){
            this.views++; 
            return this; //The function should return the object, so that chaining is supported
        }

        toString(){
            let base = super.toString();
            let viewsDisplay = `Views: ${this.views}`;
            return base +'\n'+viewsDisplay;
        }  
    }

    //return {Post,SocialMediaPost,BlogPost};
    
//}

//why does it not work locally when wrapped in the function??????????
//let Post = solve.Post;
//let SocialMediaPost = solve.SocialMediaPost;
//let BlogPost = solve.BlogPost;

let post = new Post("Post", "Content");
console.log(post.toString());

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

let blPost = new BlogPost("TestTitle", "TestContent", 28);
console.log(blPost.toString());