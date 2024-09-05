
const getTemperaturesForTimes = async (forecastData) => {
    const currentHour = new Date(forecastData.location.localtime).getHours();

    const hourlyData = forecastData.forecast.forecastday[0].hour;
    const hourlyNextDayData = forecastData.forecast.forecastday[1].hour;

    const currentIndex = hourlyData.findIndex(hour => new Date(hour.time).getHours() === currentHour);

    if (currentIndex === -1) {
        return;
    }

    const temps = {
        '3_hours_back': currentIndex - 3 >= 0 ?
            {
                hour: hourlyData[currentIndex - 3].time.split(' ')[1],
                temp: hourlyData[currentIndex - 3].temp_c
            } : 'N/A',
        '2_hours_back': currentIndex - 2 >= 0 ?
            {
                hour: hourlyData[currentIndex - 2].time.split(' ')[1],
                temp: hourlyData[currentIndex - 2].temp_c
            } : 'N/A',
        '1_hour_back': currentIndex - 1 >= 0 ?
            {
                hour: hourlyData[currentIndex - 1].time.split(' ')[1],
                temp: hourlyData[currentIndex - 1].temp_c
            } : 'N/A',
        'current': {
            hour: hourlyData[currentIndex].time.split(' ')[1],
            temp: hourlyData[currentIndex].temp_c
        } ?? 'N/A',
        '1_hour_forward': currentIndex + 1 < hourlyData.length ?
            {
                hour: hourlyData[currentIndex + 1].time.split(' ')[1],
                temp: hourlyData[currentIndex + 1].temp_c
            } : {
                hour: hourlyNextDayData[0].time.split(' ')[1],
                temp: hourlyNextDayData[0].temp_c, // the temperature for next hour or from the next day forecast
  
            },
    };

    return temps; //object containing temperatures for different time slots
};


module.exports = getTemperaturesForTimes;