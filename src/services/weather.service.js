import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

// Obtener información del clima actual
export const getCurrentWeather = async (location = 'Floridablanca') => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: location,
        lang: 'es'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

// Obtener pronóstico del clima (hasta 14 días)
export const getWeatherForecast = async (location = 'Floridablanca', days = 14) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: location,
        lang: 'es',
        days: days
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    throw error;
  }
};

// Obtener el clima en un día específico
export const getWeatherByDate = async (location = 'Floridablanca', date = '2024-10-01') => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: location,
        lang: 'es',
        dt: date
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather by date:', error);
    throw error;
  }
};
