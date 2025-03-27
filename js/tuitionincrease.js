function TuitionIncrease(){

    document.write("<h2>Tuition Increase</h2>")

    var yearTuition = 12000;

    for(var i = 1; i <= 5; i++){

        yearTuition *= 1.02;

        document.write("The tuition for year " + i + " is $" + yearTuition.toFixed(2) + ". <br>");

    }

}
TuitionIncrease();