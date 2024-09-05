import classes from './WeatherDisplay.module.css';
import { useEffect, useState } from 'react';
import { getCityWeather } from '../../redux/features/citySlice';
import { useDispatch, useSelector } from 'react-redux';
import InputCityAutocomplete from '../UI/InputCityAutocomplete';
import WeatherCard from './WeatherCard';

const WeatherDisplay = () => {

    const dispatch = useDispatch();

    const { loading, error } = useSelector((state) => state.city);
    const [userLocation, setUserLocation] = useState('');

    useEffect(() => {
        dispatch(getCityWeather(userLocation));
    }, [userLocation, dispatch]);

    return (

        <section className={classes.weatherContainer}>

            <div className={classes.searchWrapper}>
                <div className={classes.promptMsg}>
                    <p>Use our weather app to see the weather around the world</p>
                </div>

                <div className={classes.searchInput}>
                    <InputCityAutocomplete onSelectCity={setUserLocation} />
                </div>
            </div>


            <div className={classes.weatherDisplay}>
                {(loading && !error) && <h1 className={classes.loading}>Loading...</h1>}
                {error && <div className={classes.errorMsg}>{`City '${userLocation}' not found. Please enter a valid city name.`}</div>}
                {(!error && !loading) && <WeatherCard />}
            </div>

        </section>

    );
};

export default WeatherDisplay;
