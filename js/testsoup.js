function TestSoup(){

    var temp = prompt("What is the soup temerature?");
    var msg;

    if (temp <= 58.333){
            msg = "Your soup is too cold!"
    } else if (temp >= 58.333 && temp <= 73.888){
            msg = "Your soup is just right!"
    } else if (temp >= 73.889){
            msg = "Your soup is too hot!"
    } else {
            msg = "Error: Enter your temperature"
    }

    
    document.write("<h2>Soup Consumption</h2>")
    document.write(msg);
}
TestSoup();