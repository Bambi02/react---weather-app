import React from 'react';
import './css/weather-icons.css';
import weatherIcons from './WeatherIcons';
import { Link } from 'react-router-dom';

const DayCard = ({ day, match }) => {

    const getWeatherIcon = (dayData) => {
        const prefix = 'wi wi-';
        const code = `day-${dayData.weather[0].id}`;

        const icon = weatherIcons[code];
      
        return (prefix + icon);
    };

    const getNameOfDay = (dayData) => {
        const today = new Date().getDay()
        const dayIndex = new Date(dayData*1000).getDay();
        const dayInWeek = ['Nedela', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'];

        if (dayIndex === today){
            return 'Dnes'
        }else if(dayIndex === today+1){
            return 'Zajtra'
        }else{
            return dayInWeek[dayIndex];
        }
    }

    return(
        <Link to={`${match.url}/${day.dt}`} className="dayCard" key={day.dt}>
            <h2 className="dayName">
                { getNameOfDay(day.dt) }
            </h2>
            <i className={getWeatherIcon(day)}></i>
            <div className="minMax">
                <div className="maxTemp">
                    <h2>Max</h2>
                    <p>
                        { Math.floor(day.temp.max) }
                        <span className="dayDegrees">°</span>
                    </p>
                </div>
                <div className="minTemp">
                    <h2>Min</h2>
                    <p>
                        { Math.floor(day.temp.min) }
                        <span className="dayDegrees">°</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default DayCard