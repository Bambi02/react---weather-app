import React from 'react';
import img from './city4.png'


const FormCard = ({ handleSubmit, handleChange, inputValue, handleScreenToggle }) => {
    return(
        <div className="addCityForm">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" 
                    placeholder="Pridaj mesto" 
                    autoFocus
                    onChange={handleChange}
                    value={inputValue}
                />
            </form>
            <div className="addCityBackBtn" onClick={handleScreenToggle}><i className="fas fa-arrow-left"></i></div>
            <img src={ img } alt="" srcset=""/>
        </div>
    )
}

export default FormCard