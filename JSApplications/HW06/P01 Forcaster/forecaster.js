{
    /* <div id="content">
      <div id="request">
        <input id="location" class='bl' type="text">
        <input id="submit" class="bl" type="button" value="Get Weather">
      </div>
      <div id="forecast" style="display:none">
        <div id="current">
          <div class="label">Current conditions</div>
        </div>
        <div id="upcoming">
          <div class="label">Three-day forecast</div>
        </div>
      </div>
    </div>
     */
}

function attachEvents() {

    let forcastDiv = $('#forecast');
    let displayBtn = $('#submit');
    let currentDiv = $('#current');
    let upcomingDiv = $('#upcoming');   

    let conditionSymbols = {
        'Sunny': '&#x2600;', // ☀
        'Partly sunny': '&#x26C5;', // ⛅
        'Overcast': '&#x2601;', // ☁
        'Rain': '&#x2614;', // ☂
        'Degrees': '&#176;' // °
    }

    let locationName;

    displayBtn.on('click', getWeather);

    let baseUrl = 'https://judgetests.firebaseio.com';

    function request(method, endpoint) {
        let currRequest = {
            method: method,
            url: baseUrl + endpoint
        }
        return $.ajax(currRequest); //promise
    }


    function getWeather() {
        locationName = $('#location').val();
        // request locations --> get location code

        request('GET', '/locations.json')
            .then(getLocationCode)
            .catch(handleError);
    }


    //AXAJ GET get location id from db match
    function getLocationCode(locations) {
        console.log('filtering codes, sir');
        //console.log(locations);
        let loc = locations.filter(x => x.name === locationName)[0];
        console.log(loc);

        if (loc === undefined) {
            handleError(new Error("no such code"));
            return;
        }

        let code = loc.code;
        //console.log(code);

        let todayForecastP = request('GET', `/forecast/today/${code}.json`);
        let upcomingForecastP = request('GET', `/forecast/upcoming/${code}.json`);

        Promise.all([todayForecastP, upcomingForecastP])
            .then(displayForcast)
            .catch(handleError);
    }

    function displayForcast(data) {
        let [today, upcoming] = data;

        console.log(today);
        console.log(upcoming);

        

        //display today
        //{ name: locationName,
        //   forecast: { low: temp,
        //               high: temp,
        //               condition: condition } 
        //}
        $('#error').remove();
        currentDiv.find('span').remove();
        forcastDiv.find('#current').append($('<span>').html(conditionSymbols[today.forecast.condition]).addClass('condition symbol'));
       
        let forecastData = $('<span>').addClass('condition')
            .append($('<span>').addClass('forecast-data').html(today.name))
            .append($('<span>').addClass('forecast-data').html(`${today.forecast.low}&#176;/${today.forecast.high}&#176;`))
            .append($('<span>').addClass('forecast-data').html(today.forecast.condition));

        forcastDiv.find('#current').append(forecastData);

        //display future
        upcomingDiv.find('span').remove();
        for (let day of upcoming.forecast) {
            let daySpan = $('<span>').addClass('upcoming')
                .append($('<span>').html(conditionSymbols[day.condition]).addClass('symbol'))
                .append($('<span>').addClass('forecast-data').html(`${day.low}&#176;/${day.high}&#176;`))
                .append($('<span>').addClass('forecast-data').html(day.condition));
            
            upcomingDiv.append(daySpan);            
        }

        forcastDiv.show();        
    }



    //handle error
    function handleError(err) {
        console.log("error: " + err.message)
        currentDiv.find('span').remove();
        upcomingDiv.find('span').remove();
        $('#content').append($('<div id="error">').addClass('label').html('Error'));
        forcastDiv.hide(); 
    }
}