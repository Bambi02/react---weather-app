import React from 'react';

const CardSlider = ({ moveLeft, moveRight, children }) => {

    return(
        <div className="cardSlider">
            <button className="sliderLeft" onClick={moveLeft}>
                <i className="fas fa-chevron-left"></i>
            </button>
            {children}
            <button className="sliderRight" onClick={moveRight}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )

}

export default CardSlider