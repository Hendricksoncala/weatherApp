import { useState, useEffect } from 'react';
import { getCurrentWeather, getWeatherForecast, getWeatherByDate } from './services/weather.service';

const useWeather = (initialLocation = 'Floridablanca', days = 14) => {
    const [selectedLocation, setSelectedLocation] = useState(initialLocation);
    const [forecast, setForecast] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [weatherByDate, setWeatherByDate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedDay, setSelectedDay] = useState('Hoy');

    // Función para cambiar la ubicación
    const changeLocation = (newLocation) => {
        setSelectedLocation(newLocation);
    };

    // Llamada a la API para obtener el pronóstico del clima (14 días o cualquier cantidad)
    const fetchWeatherForecast = async () => {
        setLoading(true);
        try {
            const data = await getWeatherForecast(selectedLocation, days);
            setForecast(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    // Llamada a la API para obtener el clima actual
    const fetchCurrentWeather = async () => {
        setLoading(true);
        try {
            const data = await getCurrentWeather(selectedLocation);

            setCurrentWeather(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    // Llamada a la API para obtener el clima por una fecha específica
    const fetchWeatherByDate = async (date) => {
        setLoading(true);
        try {
            const data = await getWeatherByDate(selectedLocation, date);

            setWeatherByDate(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Por defecto, vamos a obtener el pronóstico del clima (puedes cambiar la lógica aquí)
        fetchWeatherForecast();
        fetchCurrentWeather();
        fetchWeatherByDate();
    }, [selectedLocation, days]);

    return {
        selectedDay,
        setSelectedDay,
        forecast,
        currentWeather, // Clima actual
        weatherByDate,  // Clima por día específico
        loading,
        error,
        changeLocation
    };
};

export default useWeather;
