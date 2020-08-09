import React from 'react';
import DayCardsList from './DayCardsList'
import GoHomeBtn from './GoHomeBtn'


const DetailScreen = ({ currentData, forecastData }) => {

    return(
        <div className="detailScreen">
            <GoHomeBtn />
            <DayCardsList 
                forecastData={forecastData}
            />
        </div>
    )
}

export default DetailScreen