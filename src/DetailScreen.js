import React from 'react';
import DayCardsList from './DayCardsList';
import GoHomeBtn from './GoHomeBtn';
import DayDetail from './DayDetail';
import { Route } from 'react-router-dom'
import './css/weather-icons.css';
import weatherIcons from './WeatherIcons';


const DetailScreen = ({ currentData, forecastData, threeHrsData, match }) => {

    const getWeatherIcon = (dayData) => {
        const prefix = 'wi wi-';
        const code = `day-${dayData.weather[0].id}`;

        const icon = weatherIcons[code];
      
        return (prefix + icon);
    };

    return(
        <div className="detailScreen">
            <GoHomeBtn />
            <Route 
                path={`${match.path}/:day`} 
                render={({ match }) => 
                    <DayDetail 
                        currentData={currentData} 
                        forecastData={forecastData} 
                        threeHrsData={threeHrsData} 
                        getWeatherIcon={getWeatherIcon} 
                        match={match}/>} 
                    />
            <DayCardsList 
                forecastData={forecastData}
                match={match}
                getWeatherIcon={getWeatherIcon}
            />
        </div>
    )
}

export default DetailScreen