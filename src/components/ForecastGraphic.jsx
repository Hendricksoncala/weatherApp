import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler // Importamos para habilitar el relleno entre líneas
);

const DayForecastChart = ({ forecast }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        if (forecast && forecast.forecast && forecast.forecast.forecastday) {
            // Mapeamos los días del pronóstico
            const days = forecast.forecast.forecastday.map(day => {
                const date = new Date(day.date);
                const options = { weekday: 'short' }; // Nombre corto del día (Lun, Mar, Mié, etc.)
                return date.toLocaleDateString('es-ES', options); // Días en español
            });

            // Extraemos la temperatura promedio para cada día
            const averageTemps = forecast.forecast.forecastday.map(day => day.day.avgtemp_c);

            // Configuramos los datos para Chart.js
            const data = {
                labels: days, // Los días de la semana
                datasets: [
                    {
                        label: 'Avg Temp (°C)', // Etiqueta del gráfico
                        data: averageTemps, // Temperaturas promedio
                        borderColor: '#000', // Color de la línea (negro)
                        borderWidth: 2, // Línea más delgada
                        pointBackgroundColor: '#000', // Color del punto (negro)
                        pointBorderColor: '#000', // Borde del punto
                        pointHoverBackgroundColor: '#000', // Color al pasar el cursor sobre el punto
                        pointHoverBorderColor: '#000', // Borde al pasar el cursor sobre el punto
                        pointRadius: 5, // Tamaño de los puntos
                        pointHoverRadius: 6, // Tamaño de los puntos al pasar el cursor
                        tension: 0.3, // Curvatura suave de la línea
                        fill: {
                            target: 'origin',
                            above: 'rgba(192, 192, 255, 0.3)', // Degradado suave en la parte superior
                            below: 'rgba(192, 192, 255, 0.3)' // Degradado suave en la parte inferior
                        }
                    }
                ]
            };

            setChartData(data);
        }
    }, [forecast]);

    if (!forecast || !forecast.forecast || !forecast.forecast.forecastday) {
        return <p>Loading forecast data...</p>; // Muestra un mensaje mientras los datos se cargan
    }

    const minTemp = Math.min(...forecast.forecast.forecastday.map(day => day.day.avgtemp_c)) - 5;
    const maxTemp = Math.max(...forecast.forecast.forecastday.map(day => day.day.avgtemp_c)) + 5;

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false // Ocultamos la leyenda
            },
            title: {
                display: false // Ocultamos el título
            },
            tooltip: {
                backgroundColor: '#333', // Color de fondo del tooltip
                titleColor: '#FFF', // Color del texto en el título del tooltip
                bodyColor: '#FFF', // Color del texto en el cuerpo del tooltip
                bodyFont: {
                    size: 12, // Tamaño del texto del tooltip
                },
                titleFont: {
                    size: 14, // Tamaño del título del tooltip
                    weight: 'bold' // Peso del título del tooltip
                },
                padding: 10, // Espaciado dentro del tooltip
                cornerRadius: 4, // Radio de las esquinas del tooltip
            }
        },
        scales: {
            x: {
                grid: {
                    display: false // Ocultamos las líneas de cuadrícula en el eje X
                },
                ticks: {
                    color: '#000', // Color de las etiquetas en el eje X
                    font: {
                        size: 14, // Tamaño del texto en el eje X
                        weight: 'bold' // Texto en negrita
                    }
                }
            },
            y: {
                min: minTemp, // Espacio extra en la parte inferior
                max: maxTemp, // Espacio extra en la parte superior
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)' // Color suave para las líneas de cuadrícula
                },
                ticks: {
                    stepSize: 5, // Paso más pequeño entre las etiquetas del eje Y para más precisión
                    color: '#000', // Color de las etiquetas en el eje Y
                    font: {
                        size: 14 // Tamaño del texto en el eje Y
                    }
                }
            }
        }
    };

    if (!chartData) {
        return <p>Loading chart data...</p>; // Muestra un mensaje mientras los datos se cargan
    }

    return (
        <div className="bg-purple-200 p-4 rounded-lg mb-4">
            <Line data={chartData} options={options} />
        </div>
    );
};

export default DayForecastChart;
