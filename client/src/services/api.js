import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

/* ============================================================ */
export const fetchWeatherData = async (cityName) => {

    try {
        const response = await axios.get(`${API_BASE_URL}/weather`, {
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
        const response = await axios.get(`${API_BASE_URL}/cities`, {
            params: { query },
        });
        return response.data;
    } catch (error) {
        return null;
    }
};