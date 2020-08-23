import React from 'react';
import RainChart from './RainChart'
import './css/weather-icons.css';

const DayDetail = ({ currentData, forecastData, threeHrsData, getWeatherIcon, match }) => {

    const thisDayData = forecastData.daily.find((day) => day.dt == match.params.day);
    const rainAmount = thisDayData.rain ? Math.round(thisDayData.rain) : 0;

    return(
        <div className="dayScreen">
            <div className="detailCityInfo">
                <h2 className="detailCityName">
                    {currentData.name}
                </h2>
                <i className={getWeatherIcon(thisDayData)}></i>
            </div>
            <RainChart 
                forecastData={forecastData}
                threeHrsData={threeHrsData}
                thisDayData={thisDayData}
            />
            <div className="dayDetails">
                <div className="denMax">
                    <i className="wi wi-day-sunny"></i>
                    <p>
                        { Math.round(thisDayData.temp.max) }
                        <span className="DayDegree" >°C</span> 
                    </p>
                </div>
                <div className="denMin">
                    <i className="wi wi-night-clear"></i>
                    <p>
                        { Math.round(thisDayData.temp.min) }
                        <span className="DayDegree" >°C</span>
                    </p>
                </div>
                <div className="humidity den-small">
                    <i className="wi wi-humidity"></i>
                    <p>{ thisDayData.humidity + ' %' }</p>
                </div>
                <div className="cloudiness den-small">
                    <i className="wi wi-cloud"></i>
                    <p>{ thisDayData.clouds + ' %' }</p>
                </div>
                <div className="rainProb den-small">
                    <i className="wi wi-raindrop"></i>
                    <p>{ Math.round(thisDayData.pop*100) + ' %' }</p>
                </div>
                <div className="rainAmount den-small">
                    <i className="wi wi-raindrops"></i>
                    <p>{ rainAmount + ' mm' }</p>
                </div>
            </div>

        </div>
    )
}

export default DayDetail