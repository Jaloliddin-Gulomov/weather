import React, { useState } from 'react'
import '../header/Header.css'
import { fetchWeather } from '../api/ApiFetch'

const Header = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery();
            console.log(data);
        }
    }
    return (
        <div className='parent'>
            <div className='header'>
                <h1>The Weather Is...  <i className="fa-solid fa-cloud-meatball"></i></h1>
                <div className="input-wrapper">
                    <i className="fa-solid fa-magnifying-glass-location"></i>
                    <input className='search' type="search" placeholder='Search...  ' value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={search} />
                </div>
            </div>
            {weather.main && (
                <div className="weather-card">
                    <div className="info-icon">
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Icon" />
                        <i>
                            {weather.weather[0].main}  {Math.round(weather.main.temp)} <sup>&deg;C</sup>
                        </i>
                    </div>
                    <div className="details">
                        <strong>Country: <mark>{weather.sys.country}</mark></strong>
                        <h2 className="town-name">
                            <span>City: {weather.name}</span>
                        </h2>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Header