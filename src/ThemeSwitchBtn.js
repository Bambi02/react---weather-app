import React, { useState } from 'react';

const ThemeSwitchBtn = () => {
    
    const [lightThemeOn, switchThemes] = useState(true)

    const switchButton = lightThemeOn ? 'switch-button-off' : 'switch-button-on';

    const handleThemeSwitch = () => switchThemes(!lightThemeOn);


    return (
        <>
            <i className='wi wi-day-sunny'></i>
            <div className="light-mode">
                <div className={switchButton} onClick={() => handleThemeSwitch()}></div>
            </div>
            <i className='wi wi-night-clear'></i>
        </>
    )
}

export default ThemeSwitchBtn
