$(
    () => {
        //clear local storage
        //localStorage.clear();
        setUserIU();


        //section switch logic

        $('#linkHome').click(() => showView('home'));
        $('#linkLogin').click(() => showView('login'));
        $('#linkRegister').click(() => showView('register'));
        $('#linkBooks').click(() => showView('books'));
        $('#linkCreate').click(() => showView('create'));
        $('#linkLogout').click(logout);

        //function button logic

        $('#viewLogin').find('form').submit(login);
        $('#viewRegister').find('form').submit(register);
        $('#viewCreate').find('form').submit(createBook);


        //$('form > input[type=submit]').click(e=>e.preventDefault());

        //alertboxes

        $(document).on({
            ajaxStart: () => $('#loadingBox').show(),
            ajaxStop: () => $('#loadingBox').hide(),

        });

        $('#infoBox').click((e) => $(e.target).hide());
        $('#errorBox').click((e) => $(e.target).hide());

        function showInfo(message, page) {
            $('#infoBox').text(message);
            $('#infoBox').show();
            setTimeout(() => $('#infoBox').fadeOut(), 3000);
            setTimeout(() => showView(page), 1000);
        }


        function showError(message) {
            $('#errorBox').text(message);
            $('#errorBox').show();
        }

        function showView(name) {
            hideViews();

            switch (name) {
                case 'home':
                    $('#viewHome').show();
                    break;
                case 'login':
                    $('#viewLogin').find('form').trigger('reset');
                    $('#viewLogin').show();
                    break;
                case 'register':
                    $('#viewRegister').find('form').trigger('reset');
                    $('#viewRegister').show();
                    break;
                case 'books':
                    listBooks();
                    $('#viewBooks').show();
                    break;
                case 'create':
                    $('#viewCreate').find('form').trigger('reset');
                    $('#viewCreate').show();
                    break;
                case 'edit':
                    $('#viewEdit').show();
                    break;
                case 'logout':
                    $('#viewLogout').show();
                    break;
            }
        }

        function hideViews() {
            $('section').hide();
        }

        // requests     
        const appId = 'kid_Bk9_HTELb';
        const dataUrl = `https://baas.kinvey.com/appdata/${appId}/books`;
        const userUrl = `https://baas.kinvey.com/user/${appId}`;
        const authHeader = {
            'Content-Type': 'application/json',
            'Authorization': 'Basic a2lkX0JrOV9IVEVMYjphOGMwZGU5YzczZDY0MjkzOTY2M2IyN2JiZGQ2NjA4NA=='
        };

        function dataRequest(method, endpoint, header, data) {
            let req = {
                method: method,
                url: dataUrl + endpoint,
                headers: header
            }

            if (data !== undefined) {
                req.data = JSON.stringify(data);
            }

            return $.ajax(req);
        }

        function userRequest(method, endpoint, header, data) {
            let req = {
                method: method,
                url: userUrl + endpoint,
                headers: header
            }

            if (data !== undefined) {
                req.data = JSON.stringify(data);
            }

            return $.ajax(req);
        }

        //user management

        function login() {

            let user = $('#login-username').val();
            let pass = $('#login-password').val();

            if (!user || !pass) {
                showError('Please fill out info!');
                console.log('Cannot login an empty user!');
                return;
            }

            console.log(`Attempting login for ${user}:${pass}`);
            let loginData = {
                username: user,
                password: pass
            };

            userRequest('POST', '/login', authHeader, loginData).then(loginSuccess).catch(handleError);
        }

        function register() {
            let user = $('#register-username').val();
            let pass = $('#register-password').val();
            let passCheck = $('#resister-confirm-password').val();

            if (user === '' || pass === '') {
                showError('Please fill out info!');
                console.log('Cannot register an empty user!');
                return;
            }

            if (pass !== passCheck) {
                showError('Passwords dont match!');
                console.log('Passwords dont match!');
                return;
            }

            console.log(`Attempting register for ${user}:${pass}`);

            let registerData = {
                username: user,
                password: pass
            };

            userRequest('POST', '', authHeader, registerData).then(registerSuccess).catch(handleError);
        }

        function logout() {

            let logoutData = {
                username: localStorage.getItem('username'),
                authtoken: localStorage.getItem('authtoken')
            };

            let logoutHeader = {
                'Authorization': 'Kinvey ' + logoutData.authtoken
            };

            console.log(`Attempting logging out for ${logoutData.username}`);

            userRequest('POST', '/_logout', logoutHeader).then(logoutSuccess).catch(handleError);
        }

        function logoutSuccess(data) {
            console.log('yay! I am logged out!');
            localStorage.clear();
            setUserIU();
            showInfo('Logout Successful', 'home');
            //showView('home');
        }

        function registerSuccess(data) {
            console.log('yay! i am registered!');
            setLocalUser(data);
            setUserIU();
            showInfo('Registration Successful', 'home');
            //showView('home');
        }

        function loginSuccess(data) {
            console.log('yay! i am in!');

            setLocalUser(data);
            setUserIU();
            showInfo('Login Successful', 'home');
            //showView('home');
        }

        function checkLocalUser() {
            let u = localStorage.getItem('username');
            let a = localStorage.getItem('authtoken');

            if (u && a) {
                return u;
            } else {
                return false;
            }
        }

        function setUserIU() {

            let u = checkLocalUser();

            if (u) {
                $('#loggedInUser').text(`Welcome, ${u}`);
                $('#linkRegister').hide();
                $('#linkLogin').hide();
                $('#linkLogout').show();
                $('#linkBooks').show();
                $('#linkCreate').show();

            } else {
                $('#loggedInUser').text(`Welcome`);
                $('#linkRegister').show();
                $('#linkLogin').show();
                $('#linkLogout').hide();
                $('#linkBooks').hide();
                $('#linkCreate').hide();
                showView('home');
            }
        }

        function setLocalUser(data) {
            localStorage.setItem('authtoken', data._kmd.authtoken);
            localStorage.setItem('username', data.username);
            localStorage.setItem('userId', data._id);

        }

        //book management

        function listBooks() {
            let currHeader = {
                'Content-Type': 'application/json',
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
            };
            dataRequest('GET', '', currHeader).then(displayBooks).catch(handleError);

        }

        function displayBooks(books) {
            console.log(books);
            let bookTableBody = $('#viewBooks').find('table').find('tbody');

            bookTableBody.empty();

            for (let book of books) {

                let actions = [];
                if (book._acl.creator === localStorage.getItem('userId')) {
                    actions.push($(`<button>&#9998;</button>`).click(() => displayBookToEdit(book)));
                    actions.push($(`<button>&#10006;</button>`).click(() => deleteBook(book._id)));
                }

                let row = $('<tr>');
                row.append(`<td>${book.title}</td>`);
                row.append(`<td>${book.author}</td>`);
                row.append(`<td>${book.description}</td>`);
                row.append($(`<td>`).append(actions));



                row.appendTo(bookTableBody);
            }
        }

        function createBook() {
            let titleEl = $('#new-title');
            let authorEl = $('#new-author');
            let descriptionEl = $('#new-description');

            if (titleEl.val() && authorEl.val() && descriptionEl.val()) {
                console.log('i CAN log this book!');

                let currHeader = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
                };

                let newBook = {
                    title: titleEl.val(),
                    author: authorEl.val(),
                    description: descriptionEl.val()
                }

                dataRequest('POST', '', currHeader, newBook).then(createSuccess).catch(handleError);
                titleEl.empty();
                authorEl.empty();
                descriptionEl.empty();

            } else {
                console.log('you crazy!');
                showError('Please fill out info!');
            }
        }

        function displayBookToEdit(book) {
            console.log("Editing book with id " + book._id);

            $('#edit-title').val(book.title);
            $('#edit-author').val(book.author);
            $('#edit-description').val(book.description);
            $('#viewEdit').find('form').submit(editBook);
            
            showView('edit');

            function editBook() {
                let editedBook = {
                    _id: book._id,
                    title: $('#edit-title').val(),
                    author: $('#edit-author').val(),
                    description: $('#edit-description').val()
                }

                console.log(editedBook);

                let currHeader = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
                };

                dataRequest('PUT', `/${book._id}`, currHeader, editedBook).then(editSuccess).catch(handleError);
            }            
        }

        function deleteBook(id) {
            console.log("Delete : " + id);
            let currHeader = {
                'Content-Type': 'application/json',
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
            };

            dataRequest('DELETE', `/${id}`, currHeader).then(deleteSuccess).catch(handleError);
        }

        function editSuccess(data){
             showInfo(`Book edited successfully`, 'books');
        }

        function deleteSuccess(data) {
            showInfo(`Book deleted successfully`, 'books');
        }


        function createSuccess(data) {
            $('#viewCreate').find('form').trigger('reset');
            showInfo('Book created successfully', 'books');
        }

        function handleError(reason) {
            console.warn("Error: " + reason);
            showError(reason.responseJSON.description);

        }
    }
);