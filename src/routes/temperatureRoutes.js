const express = require('express');
const router = express.Router();
const temperatureController = require('../controllers/temperatureController');
const authenticateToken = require('../middleware/authMiddleware');

router.use(authenticateToken);

router.get('/celsiustofahrenheit/:celsius', temperatureController.celsiusToFahrenheit);
router.get('/fahrenheittocelsius/:fahrenheit', temperatureController.fahrenheitToCelsius);
router.get('/kelvintocelsius/:kelvin', temperatureController.kelvinToCelsius);
router.get('/celsiustokelvin/:celsius', temperatureController.celsiusToKelvin);
router.get('/fahrenheittokelvin/:fahrenheit', temperatureController.fahrenheitToKelvin);
router.get('/kelvintofahrenheit/:kelvin', temperatureController.kelvinToFahrenheit);

module.exports = router;