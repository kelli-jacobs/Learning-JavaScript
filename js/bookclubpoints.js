function BookClubPoints(){

    var books = prompt("How many books did you purchase this month?");

    books = Math.floor(books);

    var points = 0;

    if (isNaN(books) || !Number.isInteger(books) || books < 0 ){

        document.write("Not a positive whole number. Try again");

    }

    else{

        if(books <= 0){
            points = 0;
        }

        else if(books == 1){
            points = 5;
        }

        else if(books == 2){
            points = 15;
        }

        else if(books == 3){
            points = 30;
        }

        else if(books >= 4){
            points = 60
        }
        else{

            points = "error";
        }

        document.write("You have earned " + points + " points.");

    }

}
BookClubPoints();

//Showing another way that this can be coded using an array
/*function CalculatePoints(booksPurchased) {

    var booksPurchased = prompt("How many books did you purchase this month?");

    if (booksPurchased >= 4) {
        document.write("You have earned 60 points.")
        //return points[4]; // 4 or more books earn 60 points
    } else if (booksPurchased >= 0) {
        return points[booksPurchased];
    } else {
        return "Invalid input. Please enter a non-negative number.";
    }
}
CalculatePoints(); */