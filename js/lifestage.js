function LifeStage(){

    var firstName = prompt("What is your first name?");
    var birthYear = prompt("What year were you born?");
    var currentYear = prompt("What is the current year?");
    var age = currentYear - birthYear;

    if (age >= 130){
        msg = "Hi " + firstName + ", You are likely a corpse!";
    } else if (age >= 80){
        msg = "Hi " + firstName + ", You are " + age + " years old, and you are ancient!";
    } else if (age >= 65){
        msg = "Hi " + firstName + ", You are " + age + " years old, and you are a senior!";
    } else if (age >= 50){
        msg = "Hi " + firstName + ", You are " + age + " years old, and you are middle aged!";
    } else if (age >= 25){
        msg = "Hi " + firstName + ", You are " + age + " years old, and you are an adult!";
    } else if (age >= 20){
        msg = "Hi " + firstName + ", You are " + age + " years old, and you are a young adult!";
    } else if (age >= 13){
        msg = "Hi " + firstName + ", You are " + age + " years old, and you are teenager!";
    } else if (age >= 11){
        msg = "Hi " + firstName + ", You are " + age + " years old, and you are a preteen!";
    } else if (age >= 5){
        msg = "Hi " + firstName + ", You are " + age + " years old, and you are a child!";
    } else if (age >= 3){
        msg = "Hi " + firstName + ", You are " + age + " years old, and you are a toddler!";
    } else if (age >= 1){
        msg = "Hi " + firstName + ", You are " + age + " years old, and you are an infant!";
    } else if (age < 1){
        msg = "Hi " + firstName + ", You are " + age + " years old, and you are unborn!";
    } else {
        msg = "Please enter a year";
    }

    var msg;
    document.write(msg);
    
}
LifeStage();