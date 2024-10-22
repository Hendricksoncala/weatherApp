import { CloudIcon, SunIcon } from 'lucide-react'; // Asegúrate de usar los íconos que necesites

const WeatherCard = ({ day, temperatureMax, temperatureMin, condition }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-purple-400 rounded-lg shadow-md my-2">
      <div className="text-left">
        <p className="text-lg font-bold">{day}</p>
        <p className="text-sm">{condition}</p>
      </div>
      <div className="flex items-center">
        <div className="text-4xl mr-2">
          {/* Aquí podrías personalizar el ícono basado en la condición del clima */}
          {condition.includes("Nublado") ? <CloudIcon /> : <SunIcon />}
        </div>
        <div className="text-right">
          <p className="text-xl">{temperatureMax}°</p>
          <p className="text-sm text-gray-600">{temperatureMin}°</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
