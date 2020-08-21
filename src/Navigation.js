import React, { useState } from 'react';
import NavBar from './NavBar';
import SideMenu from './SideMenu';

const Navigation = ({ children }) => {

    const [sideMenuOn, toggleSideMenu] = useState(false);

    const handleSideMenuToggle = () => toggleSideMenu(!sideMenuOn);

    return(
        <>
            <NavBar 
                toggleSideMenu={ handleSideMenuToggle }
                children={ children }
            />
            <SideMenu
                toggleSideMenu={ handleSideMenuToggle }
                sideMenuOn={ sideMenuOn }
            />
        </>
    )
}

export default Navigation