function TimeCalc(){

    var seconds = prompt("Enter the number of seconds: ");
    
    if (isNaN(seconds) || seconds <= 0){

        document.write("Not a positive number.  Try again.");
    }

    else {

        seconds = Math.floor(seconds);

        document.write("Seconds: " + seconds + "<br>");

        if (seconds >= 60){

            document.write("Minutes: " + (seconds/60).toFixed(2) + "<br>");

        }

        if (seconds >= 3600){

            document.write("Hours: " + (seconds/3600).toFixed(2) + "<br>");
        }

        if (seconds >= 86400){

            document.write("Days: " + (seconds/86400).toFixed(2) + "<br>");
        }

    }
    

}
TimeCalc();