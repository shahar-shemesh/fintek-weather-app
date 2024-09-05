const weatherModel = require('../models/weather');

exports.getWeather = async (req, res) => {
    const { city } = req.query;

    try {
        const weatherData = await weatherModel.getWeatherData(city);
        res.status(200).json(weatherData);
    } 
    
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};