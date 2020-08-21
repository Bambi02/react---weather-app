import React from 'react';

const SlideMenuUserBody = ({ handleToggleLoggedIn }) => {
    return (
        <ul>
            <li>Domov</li>
            <li>Pridaj Mesto</li>
            <li onClick={ handleToggleLoggedIn }>Odhlásiť sa</li>
        </ul>
    )
}

export default SlideMenuUserBody
