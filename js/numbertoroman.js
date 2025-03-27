function NumberToRoman(num) {
    const romanNumerals = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X"
    };
    return romanNumerals[num] || null;
}

function ConvertToRoman() {

    document.write("<h2>Roman Numerals</h2>");

    const number = prompt("Enter a number between 1 and 10:");
    
    if (number >= 1 && number <= 10) {
        const roman = NumberToRoman(number);
        document.write(`The Roman numeral for ${number} is: ${roman}`);
    } else {
        document.write("Error: Please enter a number between 1 and 10.");
    }
}
ConvertToRoman();