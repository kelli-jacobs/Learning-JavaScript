function BudgetAnalysis(){

    document.write("<h2>Budget Analysis</h2>")

    var budget = prompt("Enter your budget amount for this month: ");
    var expenseCount = prompt("How many expenses did you have this month? ");
    var expenseTotal = 0;

    for (var i = 1; i <= expenseCount; i++){

        var expense = prompt("How much is expense " + i);

        expenseTotal += Number(expense);

    }
    
        if (budget > expenseTotal){

            var under = budget - expenseTotal;

            document.write("You are under budget by $" + under);

        }
        else if (expenseTotal > budget){

            var over = expenseTotal - budget;

            document.write("You are over budget by $" + over);


        }
        else if (expenseTotal == budget){

            document.write("Right on budget!");

        }
        else {

            document.write("Error. Try Again");

        }


}
BudgetAnalysis();