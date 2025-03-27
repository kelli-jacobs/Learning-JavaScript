function SoftwareSales(){

    var quantity = prompt("How many software packages did you purchase?");

    if (isNaN(quantity) || quantity <= 0){

        document.write("Not a positive number.  Try again.");

    }
    else{

        quantity = Math.floor(quantity);

        var total = quantity * 99;

        var discount = 0;

        var afterDiscount = 0;

        if (quantity >= 10 && quantity <= 19){

            discount = total * .2;

        }
        else if (quantity >= 20 && quantity <= 49){

            discount = total * .3;

        }
        else if (quantity >= 50 && quantity <= 99){

            discount = total * .4;

        }
        else if (quantity >= 100){

            discount = total * .5;

        }

        else if (quantity < 10){
            discount = 0

        }
        else {

            discount = "Error";

        }

        afterDiscount = total - discount;

        document.write("Total before discount: $" + total.toFixed(2) + "<br>");
        document.write("Discount: $" + discount.toFixed(2) + "<br>");
        document.write("Total after discount: $" + afterDiscount.toFixed(2) + "<br>");
        
    }


}
SoftwareSales();