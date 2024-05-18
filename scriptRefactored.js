const numberInput = document.getElementById("number");
const codeInput = document.getElementById("code");
const convertNBtn = document.getElementById("convert-number-btn");
const convertCBtn = document.getElementById("convert-code-btn");
const output = document.getElementById("output");
const codes = [
    { code: "M", value: 1000 },
    { code: "CM", value: 900 },
    { code: "D", value: 500 },
    { code: "CD", value: 400 },
    { code: "C", value: 100 },
    { code: "XC", value: 90 },
    { code: "L", value: 50 },
    { code: "XL", value: 40 },
    { code: "X", value: 10 },
    { code: "IX", value: 9 },
    { code: "V", value: 5 },
    { code: "IV", value: 4 },
    { code: "I", value: 1 }
];

convertNBtn.addEventListener("click", () => {
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
    }
    const convertedResult = convertNumber(numberInt);
    output.innerText = convertedResult;
});

function convertNumber(number) {
    let result = "";
    for (const code of codes) {
        while (number >= code.value) {
            result += code.code;
            number -= code.value;
        }
    }
    return result;
}
convertCBtn.addEventListener("click", () => {
    const code = codeInput.value;
    output.innerText = convertCode(code);
});

function convertCode(code) {
    let result = 0;
    for (const code of codes) {
        while (s.startsWith(code.code)) {
            result += code.value;
            s = s.slice(code.code.length); 
        }
    }
    return result;
};
