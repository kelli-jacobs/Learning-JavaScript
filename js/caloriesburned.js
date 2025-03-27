function CaloriesBurned(){

    document.write("<h2>Calories Burned</h2>");

    for (var i = 10; i < 31; i+=5){

        calories = (i * 3.9);

      document.write(calories + " calories burned in " + i +  " minutes <br>");
   
    }
        
}
CaloriesBurned();