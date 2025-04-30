import React from 'react'
import { useState } from 'react';
import Sidebar from './Sidebar'; 

function Otherinfo({weather,uvIndex}) {
  if (!weather || !weather.main || !weather.wind) {
    return <p>Loading weather data...</p>;
  }
  return (
    <div className='Other-info'>
        <>
    <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>UV Index: {uvIndex}</p>
        </>
    </div>
  )
}

export default Otherinfo