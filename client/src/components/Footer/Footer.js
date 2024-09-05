import classes from './Footer.module.css';
import { useSelector } from 'react-redux';


const Footer = () => {

    const { currCity, error } = useSelector((state) => state.city);

    return (
        <footer>

            {error && <div>Error fetching weather data</div>}

            {(currCity && !error) && <>
                <div className={classes.coordinates}>
                    <span>latitude {currCity.coords.lat}</span>
                    <span>longitude {currCity.coords.lon}</span>
                </div>

                <div className={classes.currentTime}>
                    <span>accurate to {currCity.localtime.date} at {currCity.localtime.hour}</span>
                </div>
            </>}

        </footer>
    );
};

export default Footer;

