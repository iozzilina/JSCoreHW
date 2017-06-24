function attachEventsListeners() {
  // TODO: attach click events to all buttons

    
    document.getElementById('daysBtn').addEventListener('click', byDays);
    document.getElementById('hoursBtn').addEventListener('click', byHours);
    document.getElementById('minutesBtn').addEventListener('click', byMinutes);
    document.getElementById('secondsBtn').addEventListener('click', bySeconds);


    let ratesPerDay = {
        'days' : 1,
        'hours' : 24,
        'minutes': 1440,
        'seconds' : 86400       
    };


    function byDays(){
        let input = Number(document.getElementById('days').value);
        let units = 'days'
        convert(input,units); 
    }

    function byHours(){
        let input = Number(document.getElementById('hours').value);
        let units = 'hours';
        convert(input,units); 
    }

    function byMinutes(){
        let input = Number(document.getElementById('minutes').value);
        let units = 'minutes';
        convert(input,units); 
    }

    function bySeconds(){
        let input = Number(document.getElementById('seconds').value);
        let units = 'seconds';
        convert(input,units); 
    }

    function convert(input,units){

      document.getElementById('days').value = input/ratesPerDay[units]*ratesPerDay['days'];
      document.getElementById('hours').value = input/ratesPerDay[units]*ratesPerDay['hours'];
      document.getElementById('minutes').value = input/ratesPerDay[units]*ratesPerDay['minutes'];
      document.getElementById('seconds').value = input/ratesPerDay[units]*ratesPerDay['seconds'];

    }
}
