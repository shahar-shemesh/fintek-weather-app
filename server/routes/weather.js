const express = require('express');
const weatherController = require('../controllers/weather');

const router = express.Router();

// http://localhost:4000/weather => GET
router.get('/', weatherController.getWeather);


module.exports = router;
