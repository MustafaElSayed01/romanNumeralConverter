const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let result = "";
convertBtn.addEventListener("click", checkInput)
function checkInput() {
    const numberInt = parseInt(numberInput.value);
    if (!numberInt || isNaN(numberInt)) {
        output.innerText = "Please enter a valid number";
        return;
    } else if (numberInt < 1) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return;
    } else if (numberInt > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return;
    } else {
        convertNumber(numberInt);
    }
}

function convertNumber(number) {
    if (number === 0) {
        output.textContent = result;
        result = "";
        numberInput.value = "";
        return;
    } else if (number - 1000 >= 0) {
        result += "M";
        convertNumber(number - 1000)
    } else if (number - 900 >= 0) {
        result += "CM";
        convertNumber(number - 900)
    } else if (number - 500 >= 0) {
        result += "D";
        convertNumber(number - 500)
    } else if (number - 400 >= 0) {
        result += "CD";
        convertNumber(number - 400)
    } else if (number - 100 >= 0) {
        result += "C";  
        convertNumber(number - 100)
    } else if (number - 90 >= 0) {
        result += "XC";
        convertNumber(number - 90)
    } else if (number - 50 >= 0) {
        result += "L";
        convertNumber(number - 50)
    } else if (number - 40 >= 0) {
        result += "XL";
        convertNumber(number - 40)
    } else if (number - 10 >= 0) {
        result += "X"
        convertNumber(number - 10)
    } else if (number - 9 >= 0) {
        result += "IX";
        convertNumber(number - 9)
    } else if (number - 5 >= 0) {
        result += "V";
        convertNumber(number - 5)
    } else if (number - 4 >= 0) {
        result += "IV";
        convertNumber(number - 4)
    } else if (number - 1 >= 0) {
        result += "I";
        convertNumber(number - 1)
    }
}