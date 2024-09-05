import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './features/citySlice';

const store = configureStore({
    reducer: {
        city: cityReducer,
    },
});

export default store;
