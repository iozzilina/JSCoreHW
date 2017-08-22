function startApp() {
    //$('section').hide();
    $('#errorBox').hide();
    $('#infoBox').hide();
    $('#loadingBox').hide();

    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').hide()
    });

    $('#infoBox').click((e) => $(e.target).hide());
    $('#errorBox').click((e) => $(e.target).hide());


    const app = Sammy('#container', function () {
        // TODO: Define all the routes      
        console.log('i work!');

        //initializations
        this.use('Handlebars', 'hbs');

        //routes
        this.get('index.html', redirectToHome);
        this.get('#/home', displayHome);
        this.get('#/logout', logOutUser);
        this.get('#/catalog', displayCatalog);
        this.get('#/newpost', displayNewPostForm);
        this.get('#/myposts', displayMyPosts);
        this.get('#/deletepost/:id', deletePost);
        this.get('#/editpost/:id', displayEditPostForm);
        this.get('#/postdetails/:id', displayPostDetails);
        this.get('#/deletecomment/:id', deleteComment);


        //put this last!
        this.get('', redirectToHome);

        this.post('#/login', logInUser);
        this.post('#/register', registerUser);
        this.post('#/newpost', saveNewPost);
        this.post('#/editpost/:id', savePostEdits);
        this.post('#/addcomment/:id', saveComment);


        //functions
        function redirectToHome(ctx) {
            ctx.redirect('index.html#/home');
        }

        function displayHome(ctx) {

            if (sessionStorage.getItem('authtoken')) {
                ctx.redirect('#/catalog');
            }

            ctx.loadPartials({
                header: '../templates/common/header.hbs',
                footer: '../templates/common/footer.hbs',
                loginForm: '../templates/login/loginForm.hbs',
                registerForm: '../templates/register/registerForm.hbs'
            }).then(function () {
                this.partial('../templates/home/home.hbs');
            });
        }

        function logInUser(ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            console.log(`attempting login for ${username}`);
            

            auth.login(username, password)
                .then(function (userInfo) {
                    console.log('logged in!');
                    auth.saveSession(userInfo);
                    notifier.showInfo('Login successful.');
                    ctx.redirect('#/catalog');

                })
                .catch(notifier.handleError);
        }

        function logOutUser(ctx) {
            auth.logout()
                .then(function () {
                    sessionStorage.clear();
                    //displayHome(ctx);
                    notifier.showInfo('Logout successful.');
                    ctx.redirect('#/home');
                })
                .catch(auth.handleError);
        }

        function registerUser(ctx) {
            let newUser = {
                username: ctx.params.username,
                password: ctx.params.password,
                repeatPass: ctx.params.repeatPass
            };

            console.log(`verifying input for ${newUser.username}`);

            if (newUser.password !== newUser.repeatPass) {
                notifier.showError('Passwords do not match');

            } else {
                if (!validator.validateUserName(newUser.username)) {
                    notifier.showError('Invalid username: should be at least 3 characters long and should contain only english alphabet letters.');
                } else if (!validator.validatePass(newUser.password)) {
                    notifier.showError('Invalid password : should be at least 6 characters long and should contain only english alphabet letters and digits');
                } else {
                    console.log(`Attempting to register user ${newUser.username}`);
                    auth.register(newUser)
                        .then(function (userInfo) {
                            auth.saveSession(userInfo);
                            //displayHome(ctx); 
                            notifier.showInfo('Registered and Logged in!');
                            ctx.redirect('#/catalog');

                        })
                        .catch(notifier.handleError);
                }
            }
        }

        function calcTime(dateIsoFormat) {
            let diff = new Date - (new Date(dateIsoFormat));
            diff = Math.floor(diff / 60000);
            if (diff < 1) return 'less than a minute';
            if (diff < 60) return diff + ' minute' + pluralize(diff);
            diff = Math.floor(diff / 60);
            if (diff < 24) return diff + ' hour' + pluralize(diff);
            diff = Math.floor(diff / 24);
            if (diff < 30) return diff + ' day' + pluralize(diff);
            diff = Math.floor(diff / 30);
            if (diff < 12) return diff + ' month' + pluralize(diff);
            diff = Math.floor(diff / 12);
            return diff + ' year' + pluralize(diff);

            function pluralize(value) {
                if (value !== 1) return 's';
                else return '';
            }
        }

        function displayCatalog(ctx) {

            if (!sessionStorage.getItem('authtoken')) {
                ctx.redirect('#/home');
            }
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            //https://baas.kinvey.com/appdata/app_id/posts?query={}&sort={"_kmd.ect": -1}
            //ctx.posts = [1,2,3];
            requester.get('appdata', 'posts?query={}&sort={"_kmd.ect": -1}', '')
                .then(
                    function (posts) {
                        ctx.posts = posts;
                        //ctx.posts = {};
                        console.log(ctx.posts);
                        let i = 1;

                        for (let post of ctx.posts) {
                            post.age = calcTime(post._kmd.ect);
                            post.rank = i++;
                            post.isAuthor = ctx.username === post.author;
                        }

                        ctx.loadPartials({
                                header: '../templates/common/header.hbs',
                                footer: '../templates/common/footer.hbs',
                                usermenu: '../templates/common/usermenu.hbs',
                                postList: '../templates/catalog/postList.hbs',
                                post: '../templates/catalog/post.hbs'
                            })
                            .then(function () {
                                this.partial('../templates/catalog/catalogPage.hbs');
                            });
                    });
        }

        function displayMyPosts(ctx) {

            if (!sessionStorage.getItem('authtoken')) {
                ctx.redirect('#/home');
            }
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            //https://baas.kinvey.com/appdata/app_id/posts?query={"author":"username"}&sort={"_kmd.ect": -1}
            //ctx.posts = [1,2,3];
            requester.get('appdata', `posts?query={"author":"${ctx.username}"}&sort={"_kmd.ect": -1}`, '')
                .then(
                    function (posts) {
                        ctx.posts = posts;
                        //ctx.posts = {};
                        console.log(ctx.posts);
                        let i = 1;

                        for (let post of ctx.posts) {
                            post.age = calcTime(post._kmd.ect);
                            post.rank = i++;
                            post.isAuthor = ctx.username === post.author;
                        }

                        ctx.loadPartials({
                                header: '../templates/common/header.hbs',
                                footer: '../templates/common/footer.hbs',
                                usermenu: '../templates/common/usermenu.hbs',
                                postList: '../templates/catalog/postList.hbs',
                                post: '../templates/catalog/post.hbs'
                            })
                            .then(function () {
                                this.partial('../templates/catalog/mypostsPage.hbs');
                            });
                    });
        }

        function displayPostDetails(ctx) {
            if (!sessionStorage.getItem('authtoken')) {
                ctx.redirect('#/home');
            }
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            let postId = ctx.params.id.substr(1);
            ctx.comments = [];


            //https://baas.kinvey.com/appdata/app_id/comments?query={"postId":"post_id"}&sort={"_kmd.ect": -1}
            requester.get('appdata', `comments?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`, '')
                .then(function (comments) {
                    for (let comment of comments) {
                        comment.age = calcTime(comment._kmd.ect);
                        comment.isAuthor = ctx.username === comment.author;
                        ctx.comments.push(comment);
                        console.log(comment);
                    }
                })
                .catch(notifier.handleError);

            //https://baas.kinvey.com/appdata/app_id/posts/post_id

            requester.get('appdata', `posts/${postId}`, '')
                .then(
                    function (postdata) {
                        ctx.title = postdata.title;
                        ctx.url = postdata.url;
                        ctx.imageUrl = postdata.imageUrl;
                        ctx.description = postdata.description ? postdata.description : 'No description';
                        ctx._id = postId;
                        ctx.isAuthor = ctx.username === postdata.author;
                        ctx.author = postdata.author;
                        ctx.age = calcTime(postdata._kmd.ect);

                        //https://baas.kinvey.com/appdata/app_id/comments?query={"postId":"post_id"}&sort={"_kmd.ect": -1}



                        ctx.loadPartials({
                                header: '../templates/common/header.hbs',
                                footer: '../templates/common/footer.hbs',
                                usermenu: '../templates/common/usermenu.hbs',
                                comment: '../templates/catalog/comment.hbs'
                            })
                            .then(function () {
                                this.partial('../templates/catalog/postDetails.hbs');
                            });
                    }
                ).catch(notifier.handleError);
        }

        function displayNewPostForm(ctx) {
            if (!sessionStorage.getItem('authtoken')) {
                ctx.redirect('#/home');
            }
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                    header: '../templates/common/header.hbs',
                    footer: '../templates/common/footer.hbs',
                    usermenu: '../templates/common/usermenu.hbs'
                })
                .then(function () {
                    this.partial('../templates/catalog/newPostForm.hbs');
                });
        }

        function saveNewPost(ctx) {
            if (!sessionStorage.getItem('authtoken')) {
                ctx.redirect('#/home');
            }
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            console.log(ctx);

            if (!validator.validateUrl(ctx.params.url)) {
                notifier.showError("Url is invalid!");
            } else if(!validator.validateTitle(ctx.params.title)){
                notifier.showError("Title is invalid!");
            } else {
             let newPost = {
                title: ctx.params.title,
                url: ctx.params.url,
                imageUrl: ctx.params.image,
                description: ctx.params.comment,
                author: ctx.username
            };

            console.log(newPost);
            console.log('saving post, sir!');

            //https://baas.kinvey.com/appdata/app_id/posts
            /* {
            "author": "Kiril",
            "title": "Test Post",
            "description": "Test Post Description",
            "url": "https://en.wikipedia.org/wiki/Santorini",
            "imageUrl":"http://sailing-santorini.com/wp-content/uploads/2015/10/sunset-oia 500x500.jpg"
            } */

            requester.post('appdata', 'posts', '', newPost)
                .then(function (postData) {
                    console.log('posted!');
                    notifier.showInfo('Post added successfully!');
                    ctx.redirect('#/catalog');
                })
                .catch(notifier.handleError);
            }
        }

        function deletePost(ctx) {
            if (!sessionStorage.getItem('authtoken')) {
                ctx.redirect('#/home');
            }
            let postId = ctx.params.id.substr(1);

            //https://baas.kinvey.com/appdata/app_id/posts/post_id 
            requester.remove('appdata', `posts/${postId}`, '').then(function (count) {
                notifier.showInfo("Post deleted.");
                ctx.redirect('#/catalog');
            }).catch(notifier.handleError);
        }

        function displayEditPostForm(ctx) {
            if (!sessionStorage.getItem('authtoken')) {
                ctx.redirect('#/home');
            }
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            let postId = ctx.params.id.substr(1);

            //https://baas.kinvey.com/appdata/app_id/posts/post_id

            requester.get('appdata', `posts/${postId}`, '').then(
                function (postdata) {
                    ctx.title = postdata.title;
                    ctx.url = postdata.url;
                    ctx.imageUrl = postdata.imageUrl;
                    ctx.description = postdata.description;
                    ctx.id = postId;

                    ctx.loadPartials({
                            header: '../templates/common/header.hbs',
                            footer: '../templates/common/footer.hbs',
                            usermenu: '../templates/common/usermenu.hbs'
                        })
                        .then(function () {
                            this.partial('../templates/catalog/editPostForm.hbs');
                        });
                }
            ).catch(notifier.handleError);
        }

        function savePostEdits(ctx) {
            if (!sessionStorage.getItem('authtoken')) {
                ctx.redirect('#/home');
            }
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');

            console.log(ctx);

            let postId = ctx.params.id.substr(1);

            if (!validator.validateUrl(ctx.params.url)) {
                notifier.showError("Url is invalid!");
            } else if (!validator.validateTitle(ctx.params.title)) {
                notifier.showError("Title is invalid!");
            } else{

            let updatedPost = {
                title: ctx.params.title,
                url: ctx.params.url,
                imageUrl: ctx.params.image,
                description: ctx.params.description,
                author: ctx.username
            };

            console.log(updatedPost);
            console.log('Updating post, sir!');

            //https://baas.kinvey.com/appdata/app_id/posts/post_id
            /* {
            "author": "Kiril",
            "title": "Test Post",
            "description": "Test Post Description",
            "url": "https://en.wikipedia.org/wiki/Santorini",
            "imageUrl":"http://sailing-santorini.com/wp-content/uploads/2015/10/sunset-oia 500x500.jpg"
            } */

            requester.update('appdata', `posts/${postId}`, '', updatedPost)
                .then(function (postData) {
                    console.log('posted!');
                    notifier.showInfo(`Post "${postData.title}" updated.`);
                    ctx.redirect(`#/postdetails/:${postId}`);
                })
                .catch(notifier.handleError);
            }
        }

        function saveComment(ctx) {
            if (!sessionStorage.getItem('authtoken')) {
                ctx.redirect('#/home');
            }
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            let postId = ctx.params.id.substr(1);

            let newComment = {
                postId: postId,
                content: ctx.params.content,
                author: ctx.username
            };

            console.log(newComment);
            console.log('saving comment, sir!');

            //https://baas.kinvey.com/appdata/app_id/comments

            requester.post('appdata', 'comments', '', newComment)
                .then(function (postInfo) {
                    console.log('post added!');
                    notifier.showInfo('Comment created.');
                    ctx.redirect(`#/postdetails/:${postId}`);
                })
                .catch(notifier.handleError);
        }

        function deleteComment(ctx) {
            if (!sessionStorage.getItem('authtoken')) {
                ctx.redirect('#/home');
            }
            let commentId = ctx.params.id.substr(1);

            //https://baas.kinvey.com/appdata/app_id/comments/comment_id
            requester.get('appdata', `comments/${commentId}`, '')
                .then(function (commentInfo) {
                    console.log(commentInfo);
                    ctx.postId = commentInfo.postId;
                })
                .catch(notifier.handleError);

            //https://baas.kinvey.com/appdata/app_id/comments/post_id 
            requester.remove('appdata', `comments/${commentId}`, '').then(function (count) {
                notifier.showInfo("Comment deleted.");
                ctx.redirect(`#/postdetails/:${ctx.postId}`);
            }).catch(notifier.handleError);
        }

        //end of Sammy app
    });

    app.run();
}