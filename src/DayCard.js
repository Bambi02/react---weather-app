import React from 'react';
import './css/weather-icons.css';
import { Link } from 'react-router-dom';

const DayCard = ({ day, match, getWeatherIcon, setDay }) => {

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
        <Link to={`${match.url}/${day.dt}`} className="dayCard" key={day.dt} onClick={() => setDay(getNameOfDay(day.dt)) }>
            <h2 className="dayName">
                { getNameOfDay(day.dt) }
            </h2>
            <i className={getWeatherIcon(day)}></i>
            <div className="minMax">
                <div className="maxTemp">
                    <h2>Max</h2>
                    <p>
                        { Math.round(day.temp.max) }
                        <span className="dayDegrees">°</span>
                    </p>
                </div>
                <div className="minTemp">
                    <h2>Min</h2>
                    <p>
                        { Math.round(day.temp.min) }
                        <span className="dayDegrees">°</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default DayCard