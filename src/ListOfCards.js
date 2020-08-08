import React from 'react';
import CityCard from './CityCard';

const ListOfCards = ({ data, handleCardClose, position }) => {

    const listOfCards = data.length ? (
        data.map( (city) => {
            return(
                <CityCard 
                    key={city.id}
                    cityData={city} 
                    handleCardClose={handleCardClose}
                />
            )
        })) : (
            null
        ) 

    return(
        <ul className="listOfCards" style={{left: position + 'vw'}}>
            {listOfCards}
        </ul>
    )
}

export default ListOfCards