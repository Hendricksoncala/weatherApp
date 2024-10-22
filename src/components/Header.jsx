// import { SunIcon, CloudIcon, SnowflakeIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Header = ({ selectedLocation, onLocationChange, forecast, selectedDay, setSelectedDay }) => {
    const navigate = useNavigate();
    const location = useLocation();

    //url --get :D
    useEffect(() => {
        if (location.pathname === '/10-days') {
            setSelectedDay('10 días');
        } else {
            setSelectedDay('Hoy');
        }
    }, [location.pathname, setSelectedDay]);

    const handleLocationChange = (e) => {
        const newLocation = e.target.value;
        onLocationChange(newLocation);
    };

    const getIconUrl = (iconPath) => {
        return `https:${iconPath}`;
    };

    const handleDaySelection = (tab) => {
        if (tab === '10 días') {
            navigate('/10-days');  // 10 días
        } else if (tab === 'Hoy') {
            navigate('/');  // mainn osea hoy
        }
    };

    return (
        <div className="w-full mx-auto p-6 bg-gradient-to-t from-purple-700 to-purple-400 rounded-xl shadow-lg text-white mb-4">
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
                </div>
            </header>

            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-6xl font-bold">{forecast?.current?.temp_c}°</p>
                        <p className="text-lg">Se siente como {forecast?.current?.feelslike_c}°</p>
                    </div>
                    <div className="text-right">
                        {forecast?.current?.condition?.icon && (
                            <img
                                src={getIconUrl(forecast?.current?.condition?.icon)}
                                alt="weather icon"
                                className="w-16 h-16 inline-block"
                            />
                        )}
                        <p className="text-xl">{forecast?.current?.condition?.text}</p>
                    </div>
                </div>
            </div>

            <section>
                <div className="flex space-x-2 mb-6">
                    {['Hoy', 'Mañana', '10 días'].map((tab) => (
                        <button
                            key={tab}
                            className={`flex-1 py-2 px-4 rounded-full ${selectedDay === tab ? 'bg-white text-purple-600' : 'bg-purple-500'
                                }`}
                            onClick={() => handleDaySelection(tab)}
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
