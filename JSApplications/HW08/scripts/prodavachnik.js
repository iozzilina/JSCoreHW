function startApp() {
    $('#viewHome').show();
    setUserUI();

    //DOM app variables
    //$('.menu-item').show();
    const addDiv = $('#ads');

    //navigation   

    function navigateTo(event) {
        $('section').hide();
        let viewToShow = $(event.target).attr('data-target');
        //console.log(viewToShow);
        $(`#${viewToShow}`).show();
        if (viewToShow == "viewAds") {
            loadAds();
        }
    };

    //incode navigation
    function showView(viewToShow) {
        $('section').hide();
        //console.log(viewToShow);
        $(`#${viewToShow}`).show();
        if (viewToShow == "viewAds") {
            loadAds();
        }
    }


    //event listeners
    let navigationLinks = $('header').find('a[data-target]');
    //console.log(navigationLinks);
    navigationLinks.click(navigateTo);

    $('#buttonLoginUser').click(login);
    $('#buttonRegisterUser').click(register);
    $('#linkLogout').click(logout);
    $('#buttonCreateAd').click(createAd);

    function setUserUI() {
        let uname = checkLocalUser();
        if (uname) {
            //console.log('i found a local user!');
            $('.menu-item').hide();
            $('#linkHome').show();
            $('#linkListAds').show();
            $('#linkCreateAd').show();
            //$('#linkLogin').show();
            $('#linkLogout').show();
            $('#loggedInUser').text(`Welcome, ${uname}!`);
            $('#loggedInUser').show();

        } else {
            //console.log('i did not find a local user!');
            $('.menu-item').hide();
            $('#linkHome').show();
            $('#linkLogin').show();
            $('#linkRegister').show();
            $('#loggedInUser').empty();
        }
    }

    //notifications
    //$('.notification').show();
    $('.notification').click((e) => {
        $(e.target).hide();
    })

    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').hide(),

    });

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(() => $('#infoBox').fadeOut(), 3000);
    }

    function showError(message) {
        $('#errorBox').text(message);
        $('#errorBox').show();
    }

    //requester module
    let requester = (() => {

        //database variables 
        const appKey = 'kid_BJ_iknPwZ';
        const appSecret = 'd3397be0a9e349618de8c774573b5efc';
        const baseUrl = 'https://baas.kinvey.com';

        function makeAuth(type) {

            if (type === 'basic') {
                let auth = 'Basic ' + btoa(appKey + ':' + appSecret);
                //console.log(auth);
                return auth;
            } else {
                let auth = 'Kinvey ' + localStorage.getItem('authtoken');
                //console.log(auth);
                return auth;
            }
        }

        function makeRequest(method, module, uri, auth) {
            let req = {
                url: baseUrl + "/" + module + "/" + appKey + "/" + uri,
                method: method,
                headers: {
                    'Authorization': makeAuth(auth),
                    'Content-type': 'application/json'
                }
            }
            //console.log(req.url);
            return req;
        }

        function getReq(module, uri, auth) {
            //console.log('getting stuff, sire!');
            let req = makeRequest('GET', module, uri, auth);
            //console.log(req);
            return $.ajax(req);
        }

        function postReq(module, uri, auth, data) {
            //console.log('putting stuff, sire!');
            let req = makeRequest('POST', module, uri, auth);
            req.data = JSON.stringify(data);
            //console.log(req);
            return $.ajax(req);
        }

        function updateReq(module, uri, auth, data) {
            //console.log('updating stuff, sire!');
            let req = makeRequest('PUT', module, uri, auth);
            req.data = JSON.stringify(data);
            //console.log(req);
            return $.ajax(req);
        }

        function deleteReq(module, uri, auth, data) {
            //console.log('deleting stuff, sire!');
            let req = makeRequest('DELETE', module, uri, auth);
            //console.log(req);
            return $.ajax(req);
        }

        return {
            getReq,
            postReq,
            updateReq,
            deleteReq
        };
    })();

    //user authentication

    function checkLocalUser() {
        let username = localStorage.getItem('username');
        let authtoken = localStorage.getItem('authtoken');

        if (username && authtoken) {
            //console.log(username);
            return username;
        } else {
            return false;
        }
    }

    function saveSession(data) {
        localStorage.clear();
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
    }

    //register    

    async function register() {
        let form = $('#formRegister');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        //console.log('registering a new user :' + username + ':' + password);
        try {
            let response = await requester.postReq('user', '', 'basic', {
                username: username,
                password: password
            });

            saveSession(response);
            //console.log(response);
            setUserUI();
            form[0].reset();
            showView('viewAds');
              
        } catch (err) {
            handleError(err);
        }
    }

    //login
    async function login() {
        let form = $('#formLogin');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        //console.log(username + ':' + password);

        try {
            let response = await requester.postReq('user', 'login', 'basic', {
                username: username,
                password: password
            });
            //console.log(response);
            saveSession(response);
            setUserUI();
            form[0].reset();
            showView('viewAds');
        } catch (err) {
            handleError(err);
        }
    }

    //logout
    async function logout() {
        //console.log('logging out!');
        try {
            let response = await requester.postReq('user', '_logout', '', {
                authtoken: localStorage.getItem('authtoken')
            });
            //console.log(response);
            localStorage.clear();
            setUserUI();
            showView('viewHome');
        } catch (err) {
            handleError(err);
        }
    }

    //items management
    //create

    async function createAd() {
        let form = $('#formCreateAd');
        let title = form.find('input[name="title"]').val();
        let description = form.find('input[name="description"]').val();
        let price = form.find('input[name="price"]').val();
        let imgUrl = form.find('input[name="imgUrl"]').val();

        if (title.length === 0) {
            showError("Title cannot be empty!");
            return;
        }

        if (price.length === 0) {
            showError("Price cannot be empty!");
            return;
        }

        if (description.length === 0) {
            showError("description cannot be empty!");
            return;
        }

        let ad = {
            title: title,
            description: description,
            price: Number(price),
            date: (new Date()).toString('yyyy-MM-dd'),
            imgUrl: imgUrl,
            publisher: localStorage.getItem('username')
        }

        try {
            await requester.postReq('appdata', 'posts', '', ad);
            form[0].reset();
            showInfo('Add submitted successfully');
            showView('viewAds');
        } catch (err) {
            handleError(err);
        }

    }

    //retrieve
    async function loadAds() {
        let data = await requester.getReq('appdata', 'posts');
        //console.log(data);

        addDiv.empty();
        if (data.length == 0) {
            addDiv.append('<p>No adds in database</p>');
            return;
        }

        for (let ad of data) {

            if (!ad.imgUrl) {
                ad.imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cqyPeYTT_RXRFOl0bcvozsDpivDKFcr0wn_Q7uijwnQ0NOvh7niYKkQ";
            }
            let html = $('<div class="ad-box">');
            let title = $(`<div class="ad-title">${ad.title}</div>`);
            let editBtn = $(`<button class="ad-control">&#9998;</button>`).click(() => displayAdToEdit(ad));
            let deleteBtn = $(`<button class="ad-control">&#10006;</button>`).click(() => deleteAd(ad._id));

            let header = $('<div>');
            header.append(title);
            if (ad._acl.creator === localStorage.getItem('userId')) {
                title.append(editBtn);
                title.append(deleteBtn);
            }


            html.append(header);

            html.append(`<div><img src="${ad.imgUrl}"></div>`);
            html.append(`<div>Price: ${Number(ad.price).toFixed(2)}lv | By: ${ad.publisher}</div>`);
            html.append(`<div class="ad-date">${new Date(ad.date).toDateString('yyyy-MM-dd')}</div>`);
            html.append(`<div>${ad.description}</div>`);
            addDiv.append(html);
        }
    }

    //update

    function displayAdToEdit(ad) {
        //console.log(ad);

        showView('viewEditAd');

        let form = $('#formEditAd');
        let title = form.find('input[name="title"]').val(ad.title);
        let description = form.find('textarea[name="description"]').val(ad.description);
        let price = form.find('input[name="price"]').val(Number(ad.price));
        let imgUrl = form.find('input[name="imgUrl"]').val(ad.imgUrl);

        $('#buttonEditAd').click(editAd);

        async function editAd() {

            ad.title = form.find('input[name="title"]').val();
            ad.description = form.find('textarea').val();
            ad.price = Number(form.find('input[name="price"]').val());
            ad.imgUrl = form.find('input[name="imgUrl"]').val();

            //console.log(ad);

            try {
                let data = await requester.updateReq('appdata', 'posts/' + ad._id, '', ad);
                form[0].reset();
                showView('viewAds');
                showInfo('Add edited successfully');


            } catch (err) {
                handleError(err);
            }

        }
    }

    //delete
    async function deleteAd(id) {
        try {
            await requester.deleteReq('appdata', 'posts/' + id, '');
            showView('viewAds');
            showInfo('Add deleted successfully');

        } catch (err) {
            handleError(err);
        }
    }


    //error handling
    function handleError(reason) {
        //console.warn("Error: " + reason.statusText);    
        //console.warn("Error: " + reason.responseJSON.description);        
        showError(reason.responseJSON.description);
    }
}