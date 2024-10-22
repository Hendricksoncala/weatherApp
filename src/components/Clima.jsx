const Clima = ({ forecast }) => {
    if (!forecast || forecast.forecast.forecastday.length === 0) {
        return <p>No hay data disponible</p>;
    }
    return (
        <div className="bg-purple-500 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold mb-2">Horario de pronostico</h2>
            <div className="flex space-x-12 overflow-x-auto p-2 w-full items-center ">
                {forecast.forecast.forecastday[0].hour.map((hour, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <p className="text-sm">{new Date(hour.time).getHours()}h</p>
                        <img src={`https:${hour.condition.icon}`} alt="Weather icon" className="w-auto h-10 px-auto" />
                        <p className="font-semibold">{hour.temp_c}°</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clima;
