function MassWeight(){

    document.write("<h2>Mass and Weight</h2>");

    var mass = prompt("What is the mass of your object?");
    var newtons = mass * 9.8;

    if (newtons > 1000){

        document.write("Your object is too heavy!");

    }
    else if (newtons < 10){

        document.write("Your object is too light!");

    }
    else if (newtons > 10 && newtons < 1000) {

        document.write("The weight is: " + newtons.toFixed(3));

    }
    else {
        document.write("Error: Try again");
    }

}
MassWeight();