import React, { useState } from 'react';
import DayCardsList from './DayCardsList';
import GoHomeBtn from './GoHomeBtn';
import DayDetail from './DayDetail';
import { Route, Redirect } from 'react-router-dom'
import './css/weather-icons.css';
import weatherIcons from './WeatherIcons';
import Navigation from './Navigation';


const DetailScreen = ({ currentData, forecastData, threeHrsData, match }) => {

    const [day, setDay] = useState(null);

    const getWeatherIcon = (dayData) => {
        const prefix = 'wi wi-';
        const code = `day-${dayData.weather[0].id}`;

        const icon = weatherIcons[code];
      
        return (prefix + icon);
    };

    const todaysPath = forecastData.daily[0].dt;

    return(
        <div className="detailScreen">
            <Navigation>
                {/* shows day name on top nav bar after click on day card or 'dnes' on default after redirect */}
                { day || 'Dnes' }
            </Navigation>
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
                setDay={setDay}
            />
            {/*redirect so after component renders it shows todays data*/}
            <Redirect to= {`${match.url}/${todaysPath}`} />
        </div>
    )
}

export default DetailScreen