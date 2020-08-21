import React, { useState } from 'react';
import SlideMenuLayout  from './SlideMenuLayout ';

const SlideMenu = ({ slideMenuIn, toggleSlideMenu }) => {
    const [loggedIn, toggleLoggedIn] = useState(false);

    const handleToggleLoggedIn = () => {
        toggleLoggedIn(!loggedIn);
    }

    const width = slideMenuIn ? '25%' : '0%';
    const background = slideMenuIn ? ({
        opacity: '1',
        zIndex: '10'
    }) : ({
        opacity: '0',
        zIndex: '-1'
    })

    return(
        <>
            <div className="side-menu" style={{ width }}>
                <SlideMenuLayout 
                    toggleSlideMenu={ toggleSlideMenu }
                    loggedIn={ loggedIn }
                    handleToggleLoggedIn={ handleToggleLoggedIn }
                />
            </div>
            <div className="side-background" style={ background } onClick={ toggleSlideMenu }></div>
        </>
    )
}

export default SlideMenu