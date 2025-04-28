import React from 'react';

function Details({ weather }) {
  return (
    <div className='Details'>
      {weather?.city?.name && (
        <div>
          <div className='City'>
            <p>{weather.city.name}</p>
          </div>

          <div className='temperature'>
            <p>{Math.round(weather.list[0].main.temp)}°C</p>
          </div>

          {/* Weather Icon */}
          <img 
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
            alt="weather icon"
          />

          <div className='Condition'>
            <p>{weather.list[0].weather[0].main}</p>
          </div>

          <div className='Description'>
            <p>{weather.list[0].weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
