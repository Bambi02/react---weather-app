import React from 'react';


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
        </div>
    )
}

export default FormCard