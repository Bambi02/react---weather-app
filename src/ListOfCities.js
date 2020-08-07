import React from 'react';
import './css/weather-icons.css';
import weatherIcons from './WeatherIcons';
import { Link } from 'react-router-dom'

const ListOfCities = ({ cityData, closeCity, position }) => {

    const getWeatherIcon = (city) => {
        const prefix = 'wi wi-';
        const code = city.weather[0].id;
        
        const getDayNight = () => {
            const now = Date.now();
            if (now > city.sys.sunrise*1000 && now < city.sys.sunset*1000) {
                return('day-' + code) ;
            } else {
                return('night-' + code);
            }
        };

        let icon = weatherIcons[getDayNight()];
      
        return (prefix + icon);
      };

    const listOfCities = cityData.length 
        ? (cityData.map( (city) => {
            const epochTimeToHours = (when) => new Date(city.sys[`sun${when}`]*1000).getHours();
            const epochTimeToMinutes = (when) => new Date(city.sys[`sun${when}`]*1000).getMinutes();
            const formatedHours = (when) => epochTimeToHours(when) < 10 ? `0${epochTimeToHours(when)}` : epochTimeToHours(when); 
            const formatedMinutes = (when) => epochTimeToMinutes(when) < 10 ? `0${epochTimeToMinutes(when)}` : epochTimeToMinutes(when); 

            return(
            <li className="cityCard" key={city.id}>
                <button className="closeCityBtn" onClick={() => closeCity(city.id)}><span>+</span></button>
                <Link to={`/${city.id}`} className='linkContainer'>
                    <h1 className="cityName">{city.name}, {city.sys.country.toLowerCase()}</h1>
                    <i className={ getWeatherIcon(city) }></i>
                    <div className="currentTemp">
                        {Math.floor(city.main.temp)}
                        <span className="degrees">°</span>
                    </div>
                    <p className="weatherDesc">{city.weather[0].description}</p>
                    <div className="daylight">
                        <div className="sunrise">
                            <i className="wi wi-sunrise"></i>
                            {`${formatedHours('rise')}:${formatedMinutes('rise')}`}
                        </div>
                        <div className="sunset">
                            <i className="wi wi-sunset"></i>
                            {`${formatedHours('set')}:${formatedMinutes('set')}`}
                        </div>
                    </div>
                </Link>
            </li>
            )
        } )) 
        : null;

    return(
        <ul className="listOfCards" style={{left: position + 'px'}}>
            {listOfCities}
        </ul>
    )
}

export default ListOfCities