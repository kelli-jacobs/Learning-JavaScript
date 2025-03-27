function SumOfNumbers(){

    document.write("<h2>Sum of Numbers</h2>")

    var sum = 0;

    var input = 0;
    
    while (input >= 0){

        input = prompt("Enter a positive number.  (Enter a negative number to stop)");

        if (input >= 0){

            sum += Number(input);

        }

    }

    document.write("The sum of positive numbers is " + sum);

}
SumOfNumbers();