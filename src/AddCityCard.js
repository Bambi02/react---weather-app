import React from 'react';

const AddCityCard = ({ handleScreenToggle }) => {
    return(
    <div className="addCityCard">
        <h1>Pridaj mesto</h1>
        <div className="addCityBtn" onClick={handleScreenToggle}>+</div>
    </div>
    )
}

export default AddCityCard;