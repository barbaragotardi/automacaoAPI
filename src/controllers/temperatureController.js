const temperatureService = require('../services/temperatureService');

exports.celsiusToFahrenheit = async (req, res) => {
    const celsius = parseFloat(req.params.celsius);
    const result = await temperatureService.celsiusToFahrenheit(celsius);
    res.json({ fahrenheit: result });
};

exports.fahrenheitToCelsius = async (req, res) => {
    const fahrenheit = parseFloat(req.params.fahrenheit);
    const result = await temperatureService.fahrenheitToCelsius(fahrenheit);
    res.json({ celsius: result });
};

exports.kelvinToCelsius = async (req, res) => {
    const kelvin = parseFloat(req.params.kelvin);
    const result = await temperatureService.kelvinToCelsius(kelvin);
    res.json({ celsius: result });
};

exports.celsiusToKelvin = async (req, res) => {
    const celsius = parseFloat(req.params.celsius);
    const result = await temperatureService.celsiusToKelvin(celsius);
    res.json({ kelvin: result });
};

exports.fahrenheitToKelvin = async (req, res) => {
    const fahrenheit = parseFloat(req.params.fahrenheit);
    const result = await temperatureService.fahrenheitToKelvin(fahrenheit);
    res.json({ kelvin: result });
};

exports.kelvinToFahrenheit = async (req, res) => {
    const kelvin = parseFloat(req.params.kelvin);
    const result = await temperatureService.kelvinToFahrenheit(kelvin);
    res.json({ fahrenheit: result });
};