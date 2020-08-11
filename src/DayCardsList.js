import React from 'react';
import DayCard from './DayCard';

const DayCardsList = ({ forecastData, match }) => {

    const listOfDays = forecastData.daily.map((day, i, arr) => {
        if(arr.length - 1 !== i){
            return(
                <DayCard 
                    day={day}
                    match={match}
                    key={day.dt}
                />
            )
        }
    })

    return(
        <ul className="dayCardsList">
            { listOfDays }
        </ul>
    )
}

export default DayCardsList