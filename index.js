const textBox = document.getElementById('textBox');
const toF = document.getElementById('toF');
const toC = document.getElementById('toC');
const result = document.getElementById('result');

function convertTemperature() {
    const temp = Number(textBox.value);
    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number";
        return;
    }

    if (toF.checked) {
        // Celsius to Fahrenheit
        const fahrenheit = (temp * 9/5) + 32;
        result.textContent = `${fahrenheit.toFixed(2)} °F`;
    } else if (toC.checked) {
        // Fahrenheit to Celsius
        const celsius = (temp - 32) * 5/9;
        result.textContent = `${celsius.toFixed(2)} °C`;
    } else {
        result.textContent = "Please select a unit";
    }
}