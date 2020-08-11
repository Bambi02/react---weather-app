import React from 'react';

const DayDetail = ({ currentData, forecastData, match }) => {

    const selectedDay = forecastData.daily.filter((day) => day.dt == match.params.day)[0];
    console.log(selectedDay)


    return(
        <div className="dayScreen">
            <h2 className="detailCityName">
                {currentData.name}
            </h2>
            <div className="dayDetails">
                <div className="dayNightTemps">
                    <div className="denMax">
                        <span className="popisDenMax">deň</span>
                        <p>{ Math.floor(selectedDay.temp.max) }</p>
                        <span className="maxDayDegree" >°</span> 
                    </div>
                    <span>/</span>
                    <div className="denMin">
                        <p>{ Math.floor(selectedDay.temp.min) }</p>
                        <span className="minDayDegree" >°</span>
                        <span className="popisDenMin">noc</span>
                    </div>
                </div>
                <div className="cloudsRain">
                    <div className="cloudiness">
                        <h2>oblačnosť</h2>
                        <p>{ selectedDay.clouds + ' %' }</p>
                    </div>
                    <div className="rainProb">
                        <h2>zrážky</h2>
                        <p>{ selectedDay.pop * 100 + ' %' }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DayDetail