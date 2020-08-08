import React, { Component } from 'react';
import ListOfCards from './ListOfCards';
import CardSlider from './CardSlider';

class CityCards extends Component{
    cardsReqSlider = 5;

    state = {
        position: 0,
    }

    closeCityCard = (id) => {
        const data = this.props.data.filter( data => data.id !== id);

        this.props.saveData(data);
    }

    handleCardClose = (id) => {
        const cardWidth = 13.5;

        if(this.props.numberOfCards > this.cardsReqSlider) {
            if(this.props.numberOfCards % 2 === 0){
                this.setState( oldState => ({ position: oldState.position - (cardWidth / 2) }));
            }else{
                this.setState( oldState => ({ position: oldState.position + (cardWidth / 2) }));
            }
        }else if(this.props.numberOfCards === this.cardsReqSlider){
            this.setState( { position: 0 });
        }  

        this.closeCityCard(id);
    }

    setPosition = (offset) => {
        this.setState( oldState => ({ 
            position: oldState.position + offset,
        }))
    }

    render(){
        if(this.props.numberOfCards >= this.cardsReqSlider){
            return(
                <CardSlider 
                    setPosition={this.setPosition}
                    numberOfCards = {this.props.numberOfCards}
                >
                    <ListOfCards
                        data={this.props.data} 
                        handleCardClose={this.handleCardClose}
                        position={this.state.position} 
                    />
                </CardSlider>
            )
        }

        return(
            <ListOfCards
                data={this.props.data} 
                handleCardClose={this.handleCardClose}
                position={this.state.position} 
            />
        )
    }
}

export default CityCards