import axios from 'axios';

/* ============================================================ */
export const fetchWeatherData = async (cityName) => {

    try {
        const response = await axios.get(`/api/weather`, {
            params: { city: cityName },
        });
        return response.data;
    } catch (error) {
        return null;
    }
};



/* ============================================================ */
export const fetchCitySuggestions = async (query) => {

    try {
        const response = await axios.get(`/api/cities`, {
            params: { query },
        });
        return response.data;
    } catch (error) {
        return null;
    }
};