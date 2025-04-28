import React from 'react'
import Search from './Search'
import {useState } from 'react';
import Details from './Details'
import '../styles/Sidebar.css'

function Sidebar() {
    const API = '34266ddf1b406ce8e61696389f83c987';
    

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
    console.log(searching)
    
  return (
    <div className='sidebar'>
        <Search search={search} setSearch={setSearch} onSearch={searching}/>
        <Details weather={weather} />
        
    </div>
  )
}

export default Sidebar