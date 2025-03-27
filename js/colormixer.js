function ColorMixer(){

    //input
    var color1 = prompt("Enter a primary color (red, blue, or yellow");
    var color2 = prompt("Enter a primary color (red, blue, or yellow");   
    
    //variables
    var isPrimary1 = false;
    var isPrimary2 = false;

    var mixedColor = "";
    
    if (color1 == "red"  || color1 == "blue" || color1 == "yellow"){

        isPrimary1 = true;

    }
    if (color2 == "red"  || color2 == "blue" || color2 == "yellow"){

        isPrimary2 = true;

    }

    if (isPrimary1 == true && isPrimary2 == true){

        //purple
        if(color1 == "red" && color2 == "blue" || color1 == "blue" && color2 == "red"){

            mixedColor = "purple";

        }

        //orange
        else if(color1 == "red" && color2 == "yellow" || color1 == "yellow" && color2 == "red"){

            mixedColor = "orange";

        }
        //green
        else if(color1 == "blue" && color2 == "yellow" || color1 == "yellow" && color2 == "blue"){

            mixedColor = "green";

        }
        else if (color1 == color2){

            mixedColor = color1;

        }
       
        else{
            mixedColor = "Error";
        }
        
        document.write("Your mixed color is " + mixedColor);

    }
   
    else {

        document.write("One or more colors are not a primary color. Try again");

    }
}
ColorMixer();