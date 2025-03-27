function BugCollector(){

    document.write("<h2>Bug Collector Total</h2>");

    bugsCollected = 0;

    for (var i = 1; i < 8; i++){
    
        var dayTotal = prompt("How many bugs did you collect on day " + i + "?");

        bugsCollected += Number(dayTotal);

    }       
    document.write("You collected a total of " + bugsCollected + " bugs.");

}
BugCollector();