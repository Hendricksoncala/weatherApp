import { useState } from 'react';
import Clima from "../Clima";
import Stadistics from "../DashboardStas";
import Header from "../Header";
import useWeather from '../../useWeather';

const TodayForecast = () => {
    const [selectedLocation, setSelectedLocation] = useState('Floridablanca');
    const { forecast, error, changeLocation } = useWeather(selectedLocation); // Usamos la ubicación seleccionada
    const [selectedDay, setSelectedDay] = useState('Hoy'); 

    const handleLocationChange = (newLocation) => {
        setSelectedLocation(newLocation);
        changeLocation(newLocation);
    };

    if (error) {
        return <div>Error loading weather data: {error.message}</div>;
    }

    return (
        <div className="bg-[#f6edff] min-h-screen">
            <main className="mx-auto container">
                <Header
                    selectedLocation={selectedLocation}
                    onLocationChange={handleLocationChange}
                    forecast={forecast}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                />

                <Stadistics forecast={forecast} />

                <Clima forecast={forecast} />
            </main>
        </div>
    );
};

export default TodayForecast;
