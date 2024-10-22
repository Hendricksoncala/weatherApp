import { useState, useEffect } from 'react';
import { getWeatherForecast } from './services//weather.service';

const useWeather = (initialLocation = 'Floridablanca', days = 1) => {
    const [selectedLocation, setSelectedLocation] = useState(initialLocation); 
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [selectedDay, setSelectedDay] = useState('Hoy');

    // Función para cambiar la ubicación
    const changeLocation = (newLocation) => {
        setSelectedLocation(newLocation);
    };

    // Llamada a la API para obtener el pronóstico del clima
    useEffect(() => {
        const fetchWeather = async () => {
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

        fetchWeather();
    }, [selectedLocation, days]);

    return {
        selectedDay,
        setSelectedDay,
        forecast,
        loading,
        error,
        changeLocation, // Exponemos la función para cambiar la ubicación
    };
};

export default useWeather;
