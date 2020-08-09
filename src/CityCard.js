import React from 'react';
import './css/weather-icons.css';
import weatherIcons from './WeatherIcons';
import { Link } from 'react-router-dom'

const CityCard = ({ cityData, handleCardClose }) => {

    const epochTimeToHours = (when) => new Date(cityData.sys[when]*1000).getHours();
    const epochTimeToMinutes = (when) => new Date(cityData.sys[when]*1000).getMinutes();
    const formatedHours = (when) => epochTimeToHours(when) < 10 ? `0${epochTimeToHours(when)}` : epochTimeToHours(when); 
    const formatedMinutes = (when) => epochTimeToMinutes(when) < 10 ? `0${epochTimeToMinutes(when)}` : epochTimeToMinutes(when); 

    const getWeatherIcon = (cityData) => {
        const prefix = 'wi wi-';
        const code = cityData.weather[0].id;
        
        const getDayNight = () => {
            const now = Date.now();
            if (now > cityData.sys.sunrise*1000 && now < cityData.sys.sunset*1000) {
                return('day-' + code) ;
            } else {
                return('night-' + code);
            }
        };

        let icon = weatherIcons[getDayNight()];
      
        return (prefix + icon);
    };

    return(
        <li className="cityCard">
        <div className="closeCityBtn" onClick={() => handleCardClose(cityData.id)}><span>+</span></div>
        <Link to={`/${cityData.id}`} className='linkContainer'>
            <h1 className="cityName">{cityData.name}, {cityData.sys.country.toLowerCase()}</h1>
            <i className={ getWeatherIcon(cityData) }></i>
            <div className="currentTemp">
                {Math.floor(cityData.main.temp)}
                <span className="degrees">°</span>
            </div>
            <p className="weatherDesc">{cityData.weather[0].description}</p>
            <div className="daylight">
                <div className="sunrise">
                    <i className="wi wi-sunrise"></i>
                    {`${formatedHours('sunrise')}:${formatedMinutes('sunrise')}`}
                </div>
                <div className="sunset">
                    <i className="wi wi-sunset"></i>
                    {`${formatedHours('sunset')}:${formatedMinutes('sunset')}`}
                </div>
            </div>
        </Link>
        </li>
    )



}

export default CityCard 