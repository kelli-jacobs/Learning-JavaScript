function DollarGame(){

    var quarters = prompt("Enter quarters: ");
    var dimes = prompt("Enter dimes: ");
    var nickles = prompt("Enter nickles: ");
    var pennies = prompt("Enter pennies: ");

    var quarterValue = quarters * .25;
    var dimeValue = dimes * .10;
    var nickleValue = nickles * .05;
    var penniesValue = pennies * .01;

    var total = quarterValue + dimeValue + nickleValue + penniesValue;
    
    if (isNaN(total) || total <= 0){

        document.write("Not a positive number.  Try again.");

    }

    if (total == 1){

        document.write("YOU WIN!!")
    }
    

    else if (total > 1){
        document.write("You went over by " + (total - 1).toFixed(2));
    }
    else if (total < 1){
        document.write("You were under by " + (1 - total).toFixed(2));
    }
    else {
        document.write("Error.")
    }



}
DollarGame();