function MagicDates(){

    document.write("<h2>Magic Dates</h2>");

    var month = prompt("Enter a month (in numeric form).");
    var day = prompt("Enter a day (in numeric form).");
    var year = prompt("Enter a two digit year.");

    if (isNaN(month) || isNaN(day) || isNaN(year)){

        document.write("Error: Be sure to enter numbers.");

    }
    
    else if (month * day == year){

        document.write("You have a magic date!");

    }
    
    else if (month * day != year){
 
        document.write("You do not have a magic date.");

    }
    else {
        document.write("Error: Try again");
    }

}
MagicDates();