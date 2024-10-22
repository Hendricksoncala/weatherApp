const Stadistics = ({ forecast }) => {
    const currentWeather = forecast?.current;

    return (
        <section className="grid grid-cols-2 gap-4 mb-6 text-black">
            {/* Velocidad del viento */}
            <div className="bg-purple-200 rounded-lg p-3">
                <p className="text-sm mb-1 text-black">Velocidad del viento</p>
                <p className="text-lg font-semibold text-black">{currentWeather?.wind_kph} km/h</p>
                <p className="text-xs text-green-500 flex items-center">
                    <span className="mr-1">↑</span><p className="text-black"> 2 km/h</p>
                </p>
            </div>

            {/* Probabilidad de lluvia */}
            <div className="bg-purple-200 rounded-lg p-3">
                <p className="text-sm mb-1 text-black">Posibilidad de lluvia</p>
                <p className="text-lg font-semibold text-black">{currentWeather?.precip_mm}%</p>
                <p className="text-xs text-red-500 flex items-center">
                    <span className="mr-1">↓</span> <p className="text-black">10%</p>
                </p>
            </div>

            {/* Presión */}
            <div className="bg-purple-200 rounded-lg p-3">
                <p className="text-sm mb-1 text-black">Presión</p>
                <p className="text-lg font-semibold text-black">{currentWeather?.pressure_mb} hpa</p>
                <p className="text-xs text-green-500 flex items-center">
                    <span className="mr-1">↑</span> <p className="text-black">12 hpa</p>
                </p>
            </div>

            {/* Índice UV */}
            <div className="bg-purple-200 rounded-lg p-3">
                <p className="text-sm mb-1 text-black">Índice UV</p>
                <p className="text-lg font-semibold text-black">{currentWeather?.uv}</p>
                <p className="text-xs text-red-500 flex items-center">
                    <span className="mr-1">↓</span> <p className="text-black">0.3</p>
                </p>
            </div>
        </section>
    );
};

export default Stadistics;
