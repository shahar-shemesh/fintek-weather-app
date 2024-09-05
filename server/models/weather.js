const axios = require('axios');
var moment = require('moment-timezone');
const getUserLocation = require('../utils/getUserLocation');
const getTemperaturesForTimes = require('../utils/getTemperaturesForTimes');


exports.getWeatherData = async (city) => {

    // get user location if city isn't provided
    if (!city) {
        const userLocation = await getUserLocation();
        city = userLocation.city;
    }

    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
            params: {
                key: process.env.WEATHER_API_KEY,
                q: city,
                days: 2
            },
        });


        if (response.data.error) {
            return { error: `City '${city}' not found. Please enter a valid city name.` };
        }

        const forecastday = await getTemperaturesForTimes({ ...response.data });

        // convert local time to specific timezon
        const localtime = moment.tz(response.data.location.localtime, 'YYYY-MM-DD HH:mm', response.data.location.tz_id).tz('Asia/Jerusalem').format('DD/MM/YYYY HH:mm');
        
        const [year, month, day] = response.data.current.last_updated.split(' ')[0].split('-');
        const formattedDate = `${parseInt(day)}/${parseInt(month)}/${year.slice(2)}`;

        const cityWeatherData = {
            name: response.data.location.name,
            country: response.data.location.country.toLowerCase(),
            tz_id: response.data.location.tz_id,
            lastUpdate: {
                date: formattedDate,
                hour: response.data.current.last_updated.split(' ')[1],
            },
            temp_c: response.data.current.temp_c,
            condition: response.data.current.condition.text.toLowerCase(),
            precipitation: response.data.current.precip_mm,
            humidity: response.data.current.humidity,
            wind_kph: response.data.current.wind_kph,
            localtime: {
                date: localtime.split(' ')[0],
                hour: localtime.split(' ')[1],
            },
            coords: {
                lat: response.data.location.lat,
                lon: response.data.location.lon,
            },
            forecastday: forecastday, //add forecast data for next hours
        };

        return cityWeatherData;
    }

    catch (error) {
        return { error: 'Failed to fetch weather data. Please try again later.' };
    }
};