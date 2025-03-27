function RomanNumerals(){

    var userNum = prompt("Enter a number 1-10");

    var roman = "";

    var numArray = [1,2,3,4,5,6,7,8,9,10];
    var romanArray = ["I", "II","III","IV","V","VI","VII","VIII","IX","X"]

    for(var i = 0; i <= 9; i++){

        if (userNum == numArray[i]){

            roman = romanArray[i];

            break;

        }
    
    }

    if (roman != ""){

        document.write("The roman numeral is: " + roman);

    }
    else{

        document.write("Error. Try again.");

    }
}
RomanNumerals();