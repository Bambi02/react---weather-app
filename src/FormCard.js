import React from 'react';
import NotificationMessgae from './NotificationMessage';

const FormCard = ({ notification, notifColor, handleSubmit, handleChange, inputValue, handleScreenToggle }) => {
    return(
        <div className="addCityForm">
            {notification && <NotificationMessgae error={notification} color={notifColor}/>}
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