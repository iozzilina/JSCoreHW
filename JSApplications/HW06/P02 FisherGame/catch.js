function attachEvents(){

    const appId = 'kid_Bk9_HTELb';
    const baseUrl = `https://baas.kinvey.com/appdata/${appId}`;
    const kinveyUsername = 'guest';
    const kinveyPassword = 'guest';
    const base64Auth = btoa(kinveyUsername+':'+kinveyPassword);

    const authHeader = {
        'Authorization' : 'Basic ' + base64Auth,
        'Content-type' : 'application/json'
    };


    function request(method, endpoint,data){
        let myRequest = {
            method : method,
            url: baseUrl+endpoint,
            headers : authHeader,
            data : JSON.stringify(data)
        }

        return $.ajax(myRequest);
    }
    
    $('.load').on('click',loadAllCatches);
    $('.add').on('click',addCatch);

    //AJAX load all catches
    function loadAllCatches(){
        request('GET','/biggestCatches').then(displayAllCatches).catch(handleError);
    }

    function displayAllCatches(data){
        console.log(data);
        let catches = $('#catches');
        catches.empty();

        for (let item of data) {
            console.log(item);
            let itemDiv = $(`<div class="catch" data-id="${item._id}">`);
            itemDiv.append($(`<label>`).text('Angler'));
            itemDiv.append($(`<input type="text" class="angler" value="${item.angler}"/>`));
            itemDiv.append($(`<label>`).text('Weight'));
            itemDiv.append($(`<input type="number" class="weight" value="${item.weight}"/>`));
            itemDiv.append($(`<label>`).text('Species'));
            itemDiv.append($(`<input type="text" class="species" value="${item.species}"/>`));
            itemDiv.append($(`<label>`).text('Location'));
            itemDiv.append($(`<input type="text" class="location" value="${item.location}"/>`));
            itemDiv.append($(`<label>`).text('Bait'));
            itemDiv.append($(`<input type="text" class="bait" value="${item.bait}"/>`));
            itemDiv.append($(`<label>`).text('Capture Time'));
            itemDiv.append($(`<input type="number" class="captureTime" value="${item.captureTime}"/>`));
            itemDiv.append($(`<button class="update">Update</button>`).click(updateCatch));
            itemDiv.append($(`<button class="delete">Delete</button>`).click(deleteCatch)); 

            catches.append(itemDiv);
        }
    }

    //AJAX request to add a new catch
    function addCatch(){
        let newCatchData = $('#addForm');
        let dataObj = createDataJson(newCatchData);
        request('POST',`/biggestCatches`,dataObj).then(loadAllCatches).catch(handleError);
    }


    //AJAX request to update the catch
    function updateCatch(ev){
        let catchData = $(this).parent();
        let id = $(this).parent().attr('data-id');

        let dataObj = createDataJson(catchData);
        console.log(`Updating item with ID: ${id}`)

        request('PUT',`/biggestCatches/${id}`,dataObj).then(loadAllCatches).catch(handleError);

    }

    //AJAX request to delete the catch
    function deleteCatch(ev){
        let id = $(this).parent().attr('data-id');
        console.log(`Deleting item with ID: ${id}`);

        request('DELETE',`/biggestCatches/${id}`).then(loadAllCatches).catch(handleError);
    }

    function createDataJson(catchData){
        let obj = {
            angler: catchData.find('.angler').val(), 
            weight: +catchData.find('.weight').val(), 
            species: catchData.find('.species').val() , 
            location:  catchData.find('.location').val(), 
            bait: catchData.find('.bait').val(), 
            captureTime: +catchData.find('.captureTime').val()
        };        
        console.log(obj);
        return obj;
    }

    //Error handler
    function handleError(err){
        console.log("Error: "+err.statusText);
    }


}