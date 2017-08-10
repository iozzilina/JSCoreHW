function login(){

    let authenticationHeader = {
        'Authorization':'Basic '+btoa(username+':'+password),
        'Content-type':'application/json'
    }

    let credentials = {
        username: 'username',
        password: 'password'
    }


    request = {
        method: 'POST',
        url: url,
        headers: authenticationHeader,
        data: JSON.stringify(credentials)
    }

    $.ajax(request);

}