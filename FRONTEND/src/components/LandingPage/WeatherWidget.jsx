import React, { useEffect, useState } from 'react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = '9abef3a46ba04c6195721650241011';  // Replace with your actual API key
    const WEATHER_API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=new delhi&aqi=no`;

    fetch(WEATHER_API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setWeather(data.current);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setError('Failed to load weather data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-72 mx-auto"> {/* Adjusted size for consistency */}
      <h2 className="text-xl font-semibold mb-4">Weather in Delhi</h2>
      <div className="flex items-center justify-between mb-2">
        <div className="text-lg">{weather.temp_c}°C</div>
        <img
          src={`https:${weather.condition.icon}`}
          alt={weather.condition.text}
          className="w-12 h-12"
        />
      </div>
      <div className="text-sm text-gray-600">{weather.condition.text}</div>
      <div className="mt-2">
        <div>Feels like: {weather.feelslike_c}°C</div>
        <div>Wind: {weather.wind_kph} kph, {weather.wind_dir}</div>
        <div>Humidity: {weather.humidity}%</div>
        <div>Pressure: {weather.pressure_mb} mb</div>
      </div>
    </div>
  );
};

export default WeatherWidget;

