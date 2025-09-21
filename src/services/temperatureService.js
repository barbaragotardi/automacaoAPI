async function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

async function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

async function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

async function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

async function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

async function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

module.exports = {
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    kelvinToCelsius,
    celsiusToKelvin,
    fahrenheitToKelvin,
    kelvinToFahrenheit
};