import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Search from './Components/Search';
import Details from './Components/Details';

function App() {

  const API = 'e71d7b8ef275c89a7b08ea95b391c447';

  const [search ,setSearch] =useState('')
  const [weather ,setWeather] =useState(null)

  const searching =() => { 
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${API}`)
            .then(res => res.json())
            .then(result => {
                if (result.cod === "200") {
                    setWeather(result);
                    ;
                } else {
                    setWeather(null);
                   
                }
            })
            .catch(() => {
                setWeather(null);
                ;
            });
    };


  return (
    <>
    <Search search={search} setSearch={setSearch} onSearch={searching} />
    <Details weather={weather} />
    </>
     
  );
}

export default App;
