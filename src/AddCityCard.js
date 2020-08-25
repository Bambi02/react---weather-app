import React from 'react';
import img from './city4.png'

const AddCityCard = ({ handleScreenToggle }) => {
    return(
    <div className="addCityCard">
        <h1>Pridaj mesto</h1>
        <div className="addCityBtn" onClick={handleScreenToggle}>+</div>
        <img src={ img } alt="" srcset=""/>
    </div>
    )
}

export default AddCityCard;