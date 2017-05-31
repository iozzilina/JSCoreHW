// Movie ticket prices in a big retro-cinema depend on the movie title and on the day of week as shown below: 

// Movie Title	Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
// The Godfather	12	10	15	12.50	15	25	30
// Schindler's List	8.50	8.50	8.50	8.50	8.50	15	15
// Casablanca	8	8	8	8	8	10	10
// The Wizard of Oz	10	10	10	10	10	15	15

// Write a JS function that calculate the ticket price by movie title and day of week.
// The input comes as array of 2 strings. The first string holds the movie title. The second string holds the day of week.
// The output should hold the ticket price or “error” if the title or day of week is invalid.


function getMoviePrice([title,day]){
    let movieTitle = title.toLowerCase();
    let movieDay = day.toLowerCase();

    if(movieTitle =="the godfather"){
        switch (movieDay){
            case 'monday' : return 12;
            case 'tuesday' :return 10;
            case 'wednesday' :return 15;
            case 'thursday' :return 12.50;
            case 'friday' : return 15;
            case 'saturday' : return 25;
            case 'sunday' : return 30;
            default : return "error";
        }
    }

     else if(movieTitle =="schindler's list"){
        switch (movieDay){
            case 'monday' : return 8.50;
            case 'tuesday' :return 8.50;
            case 'wednesday' :return 8.50;
            case 'thursday' :return 8.50;
            case 'friday' : return 8.50;
            case 'saturday' : return 15;
            case 'sunday' : return 15;
            default : return "error";
        }
    }

     else if(movieTitle =="casablanca"){
        switch (movieDay){
            case 'monday' : return 8;
            case 'tuesday' :return 8;
            case 'wednesday' :return 8;
            case 'thursday' :return 8;
            case 'friday' : return 8;
            case 'saturday' : return 10;
            case 'sunday' : return 10;
            default : return "error";
        }
    }

    else if(movieTitle =="the wizard of oz"){
        switch (movieDay){
            case 'monday' : return 10;
            case 'tuesday' :return 10;
            case 'wednesday' :return 10;
            case 'thursday' :return 10;
            case 'friday' : return 10;
            case 'saturday' : return 15;
            case 'sunday' : return 15;
            default : return "error";
        }
    }

   else{
       return "error";
   }
}