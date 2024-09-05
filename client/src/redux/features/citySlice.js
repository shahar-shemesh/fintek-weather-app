import { createSlice } from '@reduxjs/toolkit';
import { fetchWeatherData } from '../../services/api';

const initialState = {
    currCity: null,
    loading: false,
    error: false,
};

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.currCity = { ...action.payload };
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
});



export const getCityWeather = (city) => {
    return async (dispatch) => {
        dispatch(cityActions.setError(false));
        dispatch(cityActions.setLoading(true));

        try {
            const data = await fetchWeatherData(city);

            if (data.error) {
                dispatch(cityActions.setError(true));
            } else {
                dispatch(cityActions.setCity(data));
            }

        } catch (err) {
            dispatch(cityActions.setError(true));
        } finally {
            dispatch(cityActions.setLoading(false));
        }
    }
};


export const cityActions = citySlice.actions;
export default citySlice.reducer;
