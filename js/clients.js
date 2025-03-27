function Clients(){

    var highDollar = prompt("What is your annual income?");
    var highDollarName = prompt("What is your name?");
    var celebStatus = prompt("Are you a celebrity?");
    var msg;
    
    if (highDollar >= 1000000 || celebStatus.toLowerCase() == "yes"){
                msg = "Welcome to the firm!";
     } else {
        msg = "Please visit www.accountants.com for assistance.";
     }

    document.write("<h2>Accounting Firm</h2>");
    document.write("Hi " + highDollarName + ", " + msg);

}
Clients();