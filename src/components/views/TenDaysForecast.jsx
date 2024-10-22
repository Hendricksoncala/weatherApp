import { useState } from 'react';
import useWeather from '../../useWeather'; 
import Header from '../Header';
import WeatherCard from '../ui/WeatherCard';

const TenDaysForecast = () => {
    const [selectedLocation, setSelectedLocation] = useState('Floridablanca');
    const [selectedDay, setSelectedDay] = useState('Hoy');
    const { forecast, changeLocation } = useWeather(selectedLocation, 7);

    const handleLocationChange = (newLocation) => {
        setSelectedLocation(newLocation);
        changeLocation(newLocation);
    };

    if (!forecast || !forecast.forecast || !forecast.forecast.forecastday) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-6 bg-[#f6edff]">
            <main className="mx-auto container ">
                <Header
                    selectedLocation={selectedLocation}
                    onLocationChange={handleLocationChange}
                    forecast={forecast}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                />
                <h2 className="text-2xl font-bold text-center mb-4">Pronóstico a 10 días</h2>
                {forecast.forecast.forecastday.map((day, index) => (
                    <WeatherCard
                        key={index}
                        day={new Date(day.date).toLocaleDateString('es-ES', { weekday: 'long' })}
                        temperatureMax={day.day.maxtemp_c}
                        temperatureMin={day.day.mintemp_c}
                        condition={day.day.condition.text}
                    />
                ))}
            </main>

        </div>
    );
};

export default TenDaysForecast;
