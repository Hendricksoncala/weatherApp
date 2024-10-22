import { useState, useEffect } from 'react';
import { getWeatherForecast } from './services/weather.service';

const useWeather = (location = 'Floridablanca', days = 10) => {
    const [selectedDay, setSelectedDay] = useState('Hoy');
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    // Obtener el pronóstico del clima
    useEffect(() => {
        const fetchWeatherForecast = async () => {
            setLoading(true);
            try {
                const data = await getWeatherForecast(location, days);
                setForecast(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherForecast();
    }, [location, days]);

    return {
        selectedDay,
        setSelectedDay,
        forecast,
        loading,
        error
    };
};

export default useWeather;
