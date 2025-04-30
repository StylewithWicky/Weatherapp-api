import './App.css';
import Otherinfo from './Components/Otherinfo';
import Sidebar from './Components/Sidebar';
import { useState, useEffect } from 'react';

function App() {
  const [weather, setWeather] = useState(null);
  const [uvIndex, setUvIndex] = useState(null);
  const [search, setSearch] = useState('');

  const API = '34266ddf1b406ce8e61696389f83c987';

  const fetchWeather = (city) => {
    if (!city) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
  
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          console.log("Weather data:", data);
          setWeather(data);

          const { lat, lon } = data.coord;

          // Get UV Index
          return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${API}`)

        } else {
          setWeather(null);
        }
      })
      .then(response => response?.json())
      .then(uvData => {
        if (uvData?.current?.uvi !== undefined) {
          console.log("UV Index:", uvData.current.uvi);
          setUvIndex(uvData.current.uvi);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setWeather(null);
        setUvIndex(null);
      });
  };

  return (
    <>
      <Sidebar 
        search={search}
        setSearch={setSearch}
        onSearch={() => fetchWeather(search)}
        weather={weather}
      />
      <Otherinfo weather={weather} uvIndex={uvIndex} />
    </>
  );
}

export default App;
