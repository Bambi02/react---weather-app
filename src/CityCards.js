import React, { Component } from 'react';
import ListOfCities from './ListOfCities';
import CardSlider from './CardSlider';

class CityCards extends Component{
    state = {
        position: 0,
    }

    moveCardsLeft = () => this.setState({ position: this.state.position - 330 })

    moveCardsRight = () => this.setState({ position: this.state.position + 330 })

    maxCardsWithoutSlider = () => {
        const parentWidth = this.props.parentWidth;
        const availableWidth = parentWidth - 390;
        const cardsToFit = availableWidth / 330;

        return cardsToFit;
    }

    render(){
        if(this.props.numberOfCards > this.maxCardsWithoutSlider()){
            return(
                <CardSlider 
                    moveLeft={this.moveCardsLeft}
                    moveRight={this.moveCardsRight}
                >
                    <ListOfCities
                        cityData={this.props.cityData} 
                        closeCity={this.props.closeCity}
                        position={this.state.position} 
                    />
                </CardSlider>
            )
        }

        return(
            <ListOfCities
                cityData={this.props.cityData} 
                closeCity={this.props.closeCity}
                position={this.state.position} 
            />
        )
    }
}

export default CityCards