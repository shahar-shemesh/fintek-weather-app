import { render, screen } from '@testing-library/react';
import WeatherCard from '../components/Weather/WeatherCard';

test('renders city weather card with correct data', () => {
    const mockCity = {
        name: 'Tsur Moshe',
        country: 'israel',
        tz_id: 'Asia/Jerusalem',
        lastUpdate: { date: '5/9/24', hour: '17:00' },
        temp_c: 28,
        condition: 'sunny',
        precipitation: 0,
        humidity: 63,
        wind_kph: 15.5,
        localtime: { date: '05/09/2024', hour: '17:07' },
        coords: { lat: 32.3, lon: 34.92 },
        forecastday: {
            '3_hours_back': { hour: '14:00', temp: 28.8 },
            '2_hours_back': { hour: '15:00', temp: 28.6 },
            '1_hour_back': { hour: '16:00', temp: 28.3 },
            current: { hour: '17:00', temp: 27.7 },
            '1_hour_forward': { hour: '18:00', temp: 27.1 }
        }
    };
    render(<WeatherCard currCity={mockCity} />);

    expect(screen.getByText(/israel/i)).toBeInTheDocument();

    expect(screen.getByText(/28°/i)).toBeInTheDocument();
});
