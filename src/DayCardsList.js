import React from 'react';
import DayCard from './DayCard';

const DayCardsList = ({ forecastData }) => {

    const listOfDays = forecastData.daily.map((day, i, arr) => {
        if(arr.length - 1 !== i){
            return(
                <DayCard 
                    day={day}
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