import classes from './InputCityAutocomplete.module.css';
import { useState } from 'react';
import { fetchCitySuggestions } from '../../services/api';
import { useSelector } from 'react-redux';

const InputCityAutocomplete = ({ onSelectCity }) => {

    const { currCity } = useSelector((state) => state.city);

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [emptyInput, setEmptyInput] = useState(null);

    const handleInputChange = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 2) {
            try {
                const results = await fetchCitySuggestions(value);
                setSuggestions(results);
            } catch (err) {
                setSuggestions([]);
            }
        } else {
            setSuggestions([]);
        }
    };

    const handleSelect = (city) => {
        if (!city || (city.name && city.name.trim() === '') || (typeof city === 'string' && city.trim() === '')) {
            setEmptyInput(true);
        }
        else {
            setEmptyInput(false);
            setQuery(city.name || city);
            setSuggestions([]);
            onSelectCity(city.name || city);
        }

    };

    return (
        <>
            <div className={classes.inputContainer}>
                <label htmlFor="city-name">City name</label>
                <div className={emptyInput ? `${classes.emptyInputErr} ${classes.searchInput}` : `${classes.searchInput}`}>
                    <input
                        required
                        type="text"
                        id="city-name"
                        value={query}
                        onChange={handleInputChange}
                        placeholder={(currCity ? currCity.name : "Finding your location...")}
                    />
                    <button type="submit" onClick={() => handleSelect(query)}>Check</button>
                </div>


                {suggestions.length > 0 && (
                    <div className={classes.suggestionsContainer}>
                        <ul className={classes.suggestions}>
                            {suggestions.map((city) => (
                                <li key={city.id} onClick={() => handleSelect(city)}>
                                    {city.name}, {city.region}, {city.country}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>

        </>
    );
};

export default InputCityAutocomplete;
