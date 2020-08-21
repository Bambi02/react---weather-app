import React, { useState } from 'react';
import UserContent from './UserContent'; 
import GuestContent from './GuestContent'; 

const SideMenuContent = ({ toggleSideMenu }) => {

    const [loggedIn, toggleLoggedIn] = useState(false);

    const handleLoggedInToggle = () => {
        toggleLoggedIn(!loggedIn);
    }

    const content = loggedIn 
        ? <UserContent 
            toggleSideMenu={ toggleSideMenu } 
            toggleLoggedIn={ handleLoggedInToggle } /> 
        : <GuestContent 
            toggleSideMenu={ toggleSideMenu } 
            toggleLoggedIn={ handleLoggedInToggle } 
        />;

    return content;
}

export default SideMenuContent
