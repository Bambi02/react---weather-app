import React, { useState } from 'react';
import CreateAcc from './CreateAcc';
import LogIn from './LogIn';

const GuestContent  = ({ toggleSideMenu, toggleLoggedIn }) => {

    const [creatingAcc, switchContent] = useState(false);

    const toggleContent = () => {
        switchContent(!creatingAcc)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        toggleLoggedIn();
    }

    const content = creatingAcc 
        ? <CreateAcc 
            toggleContent={toggleContent } 
            toggleSideMenu={ toggleSideMenu } 
            handleSubmit={ handleSubmit } 
        /> 
        : <LogIn 
            toggleContent={toggleContent } 
            toggleSideMenu={ toggleSideMenu } 
            handleSubmit={ handleSubmit } 
        />;

    return content;
}

export default GuestContent 
