
function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;

    const error = document.getElementById("error");
    const celsius = document.getElementById("celsius");
    const fahrenheit = document.getElementById("fahrenheit");
    const kelvin = document.getElementById("kelvin");

    error.textContent = "";
    celsius.textContent = "";
    fahrenheit.textContent = "";
    kelvin.textContent = "";

    if (isNaN(temperature)) {
        error.textContent = "Please enter a valid number.";
        return;
    }

    let c;

    if (unit === "Celsius") {
        c = temperature;
    } else if (unit === "Fahrenheit") {
        c = (temperature - 32) * 5 / 9;
    } else if (unit === "Kelvin") {
        c = temperature - 273.15;
    }

    if (c < -273.15) {
        error.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    const f = (c * 9 / 5) + 32;
    const k = c + 273.15;

    celsius.textContent = `Celsius: ${c.toFixed(2)} °C`;
    fahrenheit.textContent = `Fahrenheit: ${f.toFixed(2)} °F`;
    kelvin.textContent = `Kelvin: ${k.toFixed(2)} K`;
}
