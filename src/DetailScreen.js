import React from 'react';
import DayCardsList from './DayCardsList';
import GoHomeBtn from './GoHomeBtn';
import DayDetail from './DayDetail';
import { Route } from 'react-router-dom'


const DetailScreen = ({ currentData, forecastData, match }) => {

    return(
        <div className="detailScreen">
            <GoHomeBtn />
            <Route path={`${match.path}/:day`} render={({ match }) => <DayDetail currentData={currentData} forecastData={forecastData} match={match}/>} />
            <DayCardsList 
                forecastData={forecastData}
                match={match}
            />
        </div>
    )
}

export default DetailScreen