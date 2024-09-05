const axios = require('axios');

exports.getCitySuggestions = async (query) => {

    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/search.json`, {
            params: {
                key: process.env.WEATHER_API_KEY,
                q: query,
            },
        });
        return response.data;
    }

    catch (error) {
        throw new Error('Failed to fetch city suggestions');
    }
};