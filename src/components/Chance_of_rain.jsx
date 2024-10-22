const ChanceOfRain = ({forecast}) => {


  if (!forecast || !forecast.forecast || !forecast.forecast.forecastday[0].hour) {
    return <p>No data available</p>;
  }

  // Extraemos las horas y la probabilidad de lluvia
  const rainData = forecast.forecast.forecastday[0].hour.map((hour) => ({
    time: new Date(hour.time).toLocaleTimeString('es-ES', {
      hour: 'numeric',
      hour12: true
    }), // Formato de 12 horas (ej. 7 PM)
    chance: hour.chance_of_rain // Probabilidad de lluvia en porcentaje
  }));

  return (
    <div className="bg-purple-500 rounded-lg p-4 mb-6">
      <h2 className="text-lg font-semibold mb-2">Probabilidad de llover</h2>
      {rainData.slice(12, 18).map((item, index) => ( 
        <div key={index} className="flex items-center mb-2">
          <p className="w-12 text-sm">{item.time}</p>
          <div className="flex-1 h-4 bg-purple-400 rounded-full overflow-hidden">
            <div className="h-full bg-purple-700" style={{ width: `${item.chance}%` }}></div>
          </div>
          <p className="w-12 text-right text-sm">{item.chance}%</p>
        </div>
      ))}
    </div>
  );
};

export default ChanceOfRain;
