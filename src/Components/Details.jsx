import React from 'react'

function Details({weather,setWeather}) {
  return (
    <div className='Details'>
        {weather?.city?.name &&(
            <div>
            <p>{weather.city.name}</p>
            <p>{weather.list[0].main.temp}</p>
            <p>{weather.list[0].weather[0].main}</p>
            <p>{weather.list[0].description}</p>
       
            </div>
        )}

    </div>
  )
}

export default Details