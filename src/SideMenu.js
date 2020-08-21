import React from 'react';
import SideMenuContent from './SideMenuContent';

const SideMenu = ({ sideMenuOn, toggleSideMenu }) => {

    const width = sideMenuOn ? '25%' : '0%';
    const backgroundStyle = sideMenuOn 
        ? ({
            opacity: '1',
            zIndex: '10'
        }) : ({
            opacity: '0',
            zIndex: '-1'
        })

    return(
        <>
            <div className="side-menu" style={{ width }}>
                <SideMenuContent toggleSideMenu={ toggleSideMenu }/>
            </div>
            <div className="side-background" style={ backgroundStyle } onClick={ toggleSideMenu }></div>
        </>
    )
}

export default SideMenu
