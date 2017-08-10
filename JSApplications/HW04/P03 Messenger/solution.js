function attachEvents() {
    let urlBase = 'https://messenger-53438.firebaseio.com/messenger.json';

    //attach events
    $('#refresh').on('click', refreshMessages);    

    function refreshMessages() {
        console.log('refreshing messages sir!');
        let getAllMessagesRequest = {
            url: urlBase,
            method: 'GET',
            success: displayMsgs,
            error: displayError
        };

        console.log('calling AJAX, sir!');
        $.ajax(getAllMessagesRequest);
        console.log('that duh?');
    }

    function postMessage(){

        let message = {
          author: 'authorName',
          content: 'msgText',
          timestamp: 'time'
        }

        let postMessageRequest = {
            url: urlBase,
            method:'POST',
            data: JSON.stringify(message),
            success: displayMsgs,
            error: displayError
        }
    }


    function displayMsgs(data) {      
        console.log('displaying messages, sir!');
        console.log(data);
    }

    function displayError(err) {
        console.log('displaying error, sir!');
        console.log(err);
    }   


}