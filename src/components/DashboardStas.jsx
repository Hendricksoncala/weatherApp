const Stadistics = ({ forecast }) => {
    const currentWeather = forecast?.current;

    return (
        <section className="grid grid-cols-2 gap-4 mb-6 text-black">
            {/* Velocidad del viento */}
            <div className="bg-purple-400 rounded-lg p-3">
                <p className="text-sm mb-1">Wind speed</p>
                <p className="text-lg font-semibold">{currentWeather?.wind_kph} km/h</p>
                <p className="text-xs text-green-300">↑ 2 km/h</p>
            </div>

            {/* Probabilidad de lluvia */}
            <div className="bg-purple-400 rounded-lg p-3">
                <p className="text-sm mb-1">Rain chance</p>
                <p className="text-lg font-semibold">{currentWeather?.precip_mm}%</p>
                <p className="text-xs text-red-300">↓ 10%</p>
            </div>

            {/* Presión */}
            <div className="bg-purple-400 rounded-lg p-3">
                <p className="text-sm mb-1">Pressure</p>
                <p className="text-lg font-semibold">{currentWeather?.pressure_mb} hpa</p>
                <p className="text-xs text-green-300">↑ 12 hpa</p>
            </div>

            {/* Índice UV */}
            <div className="bg-purple-400 rounded-lg p-3">
                <p className="text-sm mb-1">UV index</p>
                <p className="text-lg font-semibold">{currentWeather?.uv}</p>
                <p className="text-xs text-red-300">↓ 0.3</p>
            </div>
        </section>
    );
};

export default Stadistics;
