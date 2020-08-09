import React from 'react';
import './css/weather-icons.css';
import weatherIcons from './WeatherIcons';

const DayCard = ({ day }) => {

    const getWeatherIcon = (dayData) => {
        const prefix = 'wi wi-';
        const code = `day-${dayData.weather[0].id}`;

        const icon = weatherIcons[code];
      
        return (prefix + icon);
    };

    const getNameOfDay = (dayData) => {
        const dayIndex = new Date(dayData*1000).getDay();
        const dayInWeek = ['Nedela', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'];

        return dayInWeek[dayIndex];
    }

    return(
        <li className="dayCard" key={day.dt}>
            <div className="dayName">
            { getNameOfDay(day.dt) }
            </div>
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
        </li>
    )
}

export default DayCard