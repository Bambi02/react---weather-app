import React from 'react';

const AddCityCard = ({ handleToggle }) => {
    return(
    <div className="addCityCard">
        <h1>Pridaj mesto</h1>
        <div className="addCityBtn" onClick={handleToggle}>+</div>
    </div>
    )
}

export default AddCityCard;