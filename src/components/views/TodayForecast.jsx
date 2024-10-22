import { useState } from 'react';
import Clima from "../Clima";
import Stadistics from "../DashboardStas";
import Header from "../Header";
import useWeather from '../../useWeather';
import DayForecastChart from '../ForecastGraphic';
import ChanceOfRain from '../Chance_of_rain';

const TodayForecast = () => {
    const [selectedLocation, setSelectedLocation] = useState('Floridablanca');
    const [selectedDay, setSelectedDay] = useState('Hoy');
    const { forecast, error, changeLocation, currentWeather } = useWeather(selectedLocation, 7);

    const handleLocationChange = (newLocation) => {
        setSelectedLocation(newLocation);
        changeLocation(newLocation);
    };

    if (error) {
        return <div>Error loading weather data: {error.message}</div>;
    }
    console.log(currentWeather)

    return (
        <div className="bg-[#f6edff] min-h-screen">
            <main className="mx-auto container px-4">
                <Header
                    selectedLocation={selectedLocation}
                    onLocationChange={handleLocationChange}
                    forecast={forecast}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                />

                <Stadistics forecast={forecast} />

                <Clima forecast={forecast} />

                <div>
                    <DayForecastChart forecast={forecast} />
                </div>
                <ChanceOfRain forecast={forecast} />

            </main>
        </div>
    );
};

export default TodayForecast;
