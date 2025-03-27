function AreaOfRect(){

    document.write("<h2>Areas of Rectangles</h2>");

    var length1 = prompt("What is the length of rectangle #1, measured in feet?");
    var width1 = prompt("What is the width of rectangle #1, measusred in feet?");

    var length2 = prompt("what is the length of rectangle #2, measured in feet?");
    var width2 = prompt("What is the width of rectangle #2, measured in feet?");

    var rect1 = length1 * width1;
    var rect2 = length2 * width2;

    document.write("The area of rectangle #1 is " + rect1 + " square feet.<br>")
    document.write("The area of rectangle #2 is " + rect2 + " square feet.<br>")

    if (rect1 < rect2){
        document.write("Rectangle #2 has the greater area.");
    }

    else if (rect1 > rect2){
        document.write("Rectangle #1 has the greater area.");
    }

    else if (rect1 == rect2){
        document.write("Both rectangles have the same area.");
    }

    else {
        document.write("Error: please try again.")
    }
}
AreaOfRect();