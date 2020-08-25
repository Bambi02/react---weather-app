import React, { useEffect } from 'react';

const CardSlider = ({ children, setPosition, numberOfCards, adjustPosition }) => {

    const cardWidth = 13.5;
    const handleMoveLeft = () => setPosition(-cardWidth);
    const handleMoveRight = () => setPosition(+cardWidth);

    useEffect(() => {
        if(numberOfCards % 2 === 0){
            adjustPosition(-cardWidth/2);
        }else if( numberOfCards > 6 && numberOfCards % 2 !== 0){
            adjustPosition(0);
        }
    }, [numberOfCards, setPosition]);

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