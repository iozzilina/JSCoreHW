/* 
<button id="btnLoadPosts">Load Posts</button>
<select id="posts"></select>
<button id="btnViewPost">View</button>
<h1 id="post-title">Post Details</h1>
<ul id="post-body"></ul>
<h2>Comments</h2>
<ul id="post-comments"></ul>
*/


function attachEvents() {
   
    let userName = 'guest';
    let userPass = 'guest';
    console.log(userName);
    console.log(userPass);
    const url = `https://baas.kinvey.com/appdata/kid_Bk9_HTELb/`;

    let currPosts = new Map();

    console.log(url);
    let selectBox = $("#posts");
    selectBox.empty();

    $('#btnLoadPosts').on('click', getPosts);
    $('#btnViewPost').on('click', showPost);

    function getPosts() {
        console.log('getting posts!');        

        let request = {
            url: url+'posts',
            //host: 'baas.kinvey.com',
            method: "GET",
            headers: {
                "Authorization": "Basic " + btoa(userName + ":" + userPass)
            },
            success: displayJson,
            error: displayError
        }

        $.ajax(request);

        //$.get(`https://api.github.com/users/${username}/repos`).then(displayJson);
        function displayError(error) {
            container.append($(`<li>Error </li>`));
        }

        function displayJson(posts) {
            //console.log(posts);
            for (let post of posts) {
                currPosts.set(post._id, {title: post.title, body: post.body});
                console.log(post);
                selectBox.append($('<option>', {
                    value: post._id
                }).text(post.title));
            }
        }
    }

    function showPost() {
        console.log(currPosts);
        let postId = $('#posts').find(':selected').val();  
        let currPost = currPosts.get(postId);       

        console.log(`you selected the post with id: ${postId}`)
        console.log(currPost);

        $('#post-title').text(currPost.title);
        $('#post-body').text(currPost.body);

        let commentBox = $('#post-comments');
        commentBox.empty();

        let request = {
            url: url+`comments/?query={"postId":"${postId}"}`,            
            method: "GET",
            headers: {
                "Authorization": "Basic " + btoa(userName + ":" + userPass)
            },
            success: displayComments,
            error: displayCommentErrors
        }

        $.ajax(request);
       
        function displayCommentErrors(error) {
            commentBox.append($(`<li>Error </li>`));
        }

        function displayComments(comments) {
            console.log(comments);
            for (let comment of comments) {
               let li = $(`<li> ${comment.body}</li>`);              
               li.appendTo(commentBox);               
            }
        }
    }
}