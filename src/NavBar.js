import React from 'react';
import ThemeSwitchBtn from './ThemeSwitchBtn';

const NavBar = ({ toggleSideMenu, children }) => {

    return(
        <nav>
            <div className="leftPart">
                <i className="fas fa-bars" onClick={toggleSideMenu}></i>
                <div className="logo">DK weather</div>
            </div>
            <div className="navDayName">
                { children }
            </div>
            <div className="rightPart">
                <ThemeSwitchBtn />
            </div>
        </nav>
    )

}

export default NavBar