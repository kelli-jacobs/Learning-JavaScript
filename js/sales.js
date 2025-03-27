function sales(){

    var numSales = prompt("How many sales did you have?");
    var dollars = prompt("What is your total dollar amount of sales?");
    var baseSalary = 500;
    var commission = Number(dollars) * .09;
    var bonus;

    if (numSales >= 3 && dollars >= 1000){
        bonus = Number(numSales) * 50;
    }  else Number(bonus) = 0;

    var grossEarnings = Number(baseSalary + commission + bonus);

    document.write("<h2>Earnings Statement</h2>");
    document.write("Earnings: $" + (Number(baseSalary + commission) + "<br>"));
    document.write("Bonus: $" + bonus + "<br>");
    document.write("Gross Earnings: $" + grossEarnings);

}
sales();