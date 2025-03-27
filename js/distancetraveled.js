function DistanceTraveled(){

    document.write("<h2>Distance Traveled</h2>")

    var speed = prompt("What is your speed in mph?");
    var hours = prompt("How many hours have you been traveling?");

    document.write("Hours &nbsp&nbsp&nbsp&nbsp&nbspDistance Traveled <br>");

    for (var i = 1; i <= hours; i++){

        var distance = speed * i;

        document.write(i + "  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp   " + distance + "<br>");


    }

}
DistanceTraveled();