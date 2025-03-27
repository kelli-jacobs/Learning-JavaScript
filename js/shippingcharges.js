function ShippingCharges(){

    var weight = prompt("What is the weight of your package in pounds?");

    

    if (isNaN(weight) || weight <= 0){

        document.write("Not a positive number.  Try again.");
    }
    else {
        if (weight <= 2){
            perPound = 1.10;
        }

        else if (weight > 2 && weight <= 6){
            perPound = 2.20;
        }

        else if (weight > 6 && weight <= 10){
            perPound = 3.70;
        }

        else if (weight > 10){
            perPound = 3.80;
        }
        else {
            perPound = "Error";
        }

        var total = weight * perPound;

        document.write("Total: $ " + total.toFixed(2));
    }

}
ShippingCharges();