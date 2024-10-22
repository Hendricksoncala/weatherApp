import { useState } from "react";
import { SearchIcon, CloudIcon } from "lucide-react";
import useWeather from '../useWeather'; 

const Header = () => {
    const [selectedLocation, setSelectedLocation] = useState('Floridablanca');
    const { selectedDay, setSelectedDay, forecast, loading, error, changeLocation } = useWeather(selectedLocation);

    const handleLocationChange = (e) => {
        const newLocation = e.target.value;
        setSelectedLocation(newLocation);
        changeLocation(newLocation);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading weather data: {error.message}</div>;
    }

    return (
        <div className="w-full mx-auto p-6 bg-gradient-to-t from-purple-700 to-purple-400 rounded-xl shadow-lg text-white mb-4">
            {/* Header con select (no sabia comno poner inputs) */}
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">{forecast?.location?.name}, {forecast?.location?.country}</h1>
                <div className="flex items-center space-x-2">
                    <select
                        value={selectedLocation}
                        onChange={handleLocationChange}
                        className="px-2 py-1 rounded text-black"
                    >
                        <option value="Kharkiv">Kharkiv, Ukraine</option>
                        <option value="Floridablanca">Floridablanca, Colombia</option>
                        <option value="Tokyo">Tokyo, Japan</option>
                        <option value="New York">New York, USA</option>
                        <option value="Sydney">Sydney, Australia</option>
                    </select>
                    <SearchIcon className="w-5 h-5" />
                </div>
            </header>

            {/* Datos del clima */}
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-6xl font-bold">{forecast?.current?.temp_c}°</p>
                        <p className="text-lg">Feels like {forecast?.current?.feelslike_c}°</p>
                    </div>
                    <div className="text-right">
                        <CloudIcon className="w-16 h-16 inline-block" />
                        <p className="text-xl">{forecast?.current?.condition?.text}</p>
                    </div>
                </div>
            </div>
            {/* Cambiador de diasass */}
            <section>
                <div className="flex space-x-2 mb-6">
                    {['Hoy', 'Mañana', '10 dias'].map((tab) => (
                        <button
                            key={tab}
                            className={`flex-1 py-2 px-4 rounded-full ${selectedDay === tab ? 'bg-white text-purple-600' : 'bg-purple-500'
                                }`}
                            onClick={() => setSelectedDay(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Header;
