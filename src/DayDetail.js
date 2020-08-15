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
                <div className="dayNightTemps">
                    <div className="denMax">
                        <p>
                            { Math.round(thisDayData.temp.max) }
                            <span className="DayDegree" >°</span> 
                        </p>
                    </div>
                    <span>/</span>
                    <div className="denMin">
                        <p>
                            { Math.round(thisDayData.temp.min) }
                            <span className="DayDegree" >°</span>
                        </p>
                    </div>
                </div>
                <div className="cloudsRain">
                    <div className="cloudiness">
                        <i className="wi wi-cloud"></i>
                        <p>{ thisDayData.clouds + ' %' }</p>
                    </div>
                    <div className="rainProb">
                        <i className="wi wi-raindrops"></i>
                        <p>{ rainAmount + ' mm' }</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DayDetail