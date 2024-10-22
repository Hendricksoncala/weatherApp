import Header from '../Header';
import WeatherCard from '../ui/WeatherCard'; // Importa el componente de la tarjeta

const TenDaysForecast = () => {
    // Simulación de datos para los 10 días
    const weatherData = [
        { day: 'Today', temperatureMax: 3, temperatureMin: -2, condition: 'Cloudy and Sunny' },
        { day: 'Thursday, Jan 19', temperatureMax: 3, temperatureMin: -2, condition: 'Cloudy' },
        { day: 'Friday, Jan 20', temperatureMax: 3, temperatureMin: -2, condition: 'Cloudy' },
        { day: 'Saturday, Jan 21', temperatureMax: 3, temperatureMin: -2, condition: 'Cloudy and Sunny' },
        { day: 'Sunday, Jan 22', temperatureMax: 3, temperatureMin: -2, condition: 'Cloudy' },
        { day: 'Monday, Jan 23', temperatureMax: 3, temperatureMin: -2, condition: 'Cloudy' },
        { day: 'Tuesday, Jan 24', temperatureMax: 3, temperatureMin: -2, condition: 'Cloudy and Sunny' },
        { day: 'Wednesday, Jan 25', temperatureMax: 3, temperatureMin: -2, condition: 'Cloudy' },
        { day: 'Thursday, Jan 26', temperatureMax: 3, temperatureMin: -2, condition: 'Cloudy' },
        { day: 'Friday, Jan 27', temperatureMax: 3, temperatureMin: -2, condition: 'Cloudy and Sunny' },
    ];

    return (
        <div className="p-6 bg-[#f6edff]">
            <main className="mx-auto container ">
                <Header />
                <h2 className="text-2xl font-bold mb-4 text-black">10-Day Forecast</h2>
                {weatherData.map((dayData, index) => (
                    <WeatherCard
                        key={index}
                        day={dayData.day}
                        temperatureMax={dayData.temperatureMax}
                        temperatureMin={dayData.temperatureMin}
                        condition={dayData.condition}
                    />
                ))}
            </main>

        </div>
    );
};

export default TenDaysForecast;
