import classes from './WeatherCard.module.css';
import { useSelector } from 'react-redux';

const WeatherCard = () => {

    const { currCity } = useSelector((state) => state.city);

    return (
        <>
            {currCity && <div className={classes.cityWeatherCard}>

                <div className={classes.location}>
                    <h1 className={classes.name}>{currCity.name}</h1>
                    <p className={classes.country}>{currCity.country}</p>
                    <p className={classes.lastUpdate}>{currCity.lastUpdate.date} at {currCity.lastUpdate.hour}</p>
                </div>


                <div className={classes.temp}>
                    <p className={classes.degree}>
                        {Math.round(currCity.temp_c)}
                        <span className={classes.symbol}>°</span>
                    </p>
                    <p className={classes.condition}>{currCity.condition}</p>
                </div>


                <div className={classes.metrics}>
                    <span className={classes.metItem}>
                        <p className={classes.attributeName}>precipitation</p>
                        <p className={classes.attributeValue}>{currCity.precipitation} mm</p>
                    </span>

                    <span className={classes.metItem}>
                        <p className={classes.attributeName}>humidity</p>
                        <p className={classes.attributeValue}>{currCity.humidity}%</p>
                    </span>

                    <span className={classes.metItem}>
                        <p className={classes.attributeName}>wind</p>
                        <p className={classes.attributeValue}>{Math.round(currCity.wind_kph)} km/h</p>
                    </span>

                </div>


                <div className={classes.timeline}>
                    {Object.entries(currCity.forecastday).map(([key, value]) =>
                        <span key={key}>
                            <p className={classes.hour}>{value.hour}</p>
                            <p className={classes.hourTemp}>{Math.round(value.temp)}°</p>
                        </span>
                    )}
                </div>

            </div>}

        </>
    );
};


export default WeatherCard;
