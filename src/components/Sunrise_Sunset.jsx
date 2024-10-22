import { SunIcon, MoonIcon } from 'lucide-react';  
import { useEffect, useState } from 'react';

const SunriseSunset = ({ forecast }) => {
    const [sunriseDiff, setSunriseDiff] = useState('');
    const [sunsetDiff, setSunsetDiff] = useState('');

    // Verificar si forecast es válido
    const hasData = forecast && forecast.forecast && forecast.forecast.forecastday;

    const sunrise = hasData ? forecast.forecast.forecastday[0].astro.sunrise : null;
    const sunset = hasData ? forecast.forecast.forecastday[0].astro.sunset : null;

    // Función para calcular la diferencia en horas/minutos
    const getTimeDifference = (timeString) => {
        const [hours, minutes] = timeString.split(/:| /).map(Number);
        const isPM = timeString.includes('PM');
        const targetTime = new Date();
        targetTime.setHours(isPM ? hours + 12 : hours, minutes);

        const now = new Date();
        const diff = (targetTime - now) / (1000 * 60 * 60); // Diferencia en horas
        const diffHours = Math.floor(Math.abs(diff));
        const diffMinutes = Math.floor((Math.abs(diff) % 1) * 60);

        return diff > 0 ? `in ${diffHours}h ${diffMinutes}m` : `${diffHours}h ${diffMinutes}m ago`;
    };

    // Cálculo de tiempo en amanecer y atardecer
    useEffect(() => {
        if (sunrise && sunset) {
            setSunriseDiff(getTimeDifference(sunrise));
            setSunsetDiff(getTimeDifference(sunset));
        }
    }, [sunrise, sunset]);

    if (!hasData) {
        return <p>No data available</p>;
    }

    return (
        <div className="flex justify-between space-x-4 text-black">
            {/* Tarjeta de amanecer */}
            <div className="p-4 rounded-lg flex-1 flex flex-col items-center bg-purple-200">
                <MoonIcon className="w-6 h-6 mb-2" />
                <p className="text-lg font-semibold">Amanecer</p>
                <p className="text-xl">{sunrise}</p>
                <p className="text-sm text-gray-500">{sunriseDiff}</p> {/* Diferencia de tiempo */}
            </div>

            {/* Tarjeta de atardecer */}
            <div className="p-4 rounded-lg flex-1 flex flex-col items-center bg-purple-200">
                <SunIcon className="w-6 h-6 mb-2" />
                <p className="text-lg font-semibold">Atardecer</p>
                <p className="text-xl">{sunset}</p>
                <p className="text-sm text-gray-500">{sunsetDiff}</p> {/* Diferencia de tiempo */}
            </div>
        </div>
    );
};

export default SunriseSunset;
