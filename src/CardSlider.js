import React, { useEffect } from 'react';

const CardSlider = ({ children, setPosition, numberOfCards }) => {

    const cardWidth = 13.5;
    const handleMoveLeft = () => setPosition(-cardWidth);
    const handleMoveRight = () => setPosition(+cardWidth);

    useEffect(() => {
        numberOfCards % 2 === 0 && setPosition(-cardWidth/2);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setPosition, numberOfCards]);

    return(
        <div className="cardSlider">
            <button className="sliderLeft" onClick={handleMoveLeft}>
                <i className="fas fa-chevron-left"></i>
            </button>
            {children}
            <button className="sliderRight" onClick={handleMoveRight}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )

}

export default CardSlider