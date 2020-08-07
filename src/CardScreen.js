import React, { Component } from 'react';
import CityCards from './CityCards';
import AddCityCard from './AddCityCard';
import axios from 'axios';

class CardScreen extends Component {

    signal = axios.CancelToken.source();

    state = {
        width:0
    }

    componentDidMount() {
        const width = this.divElement.clientWidth;
        this.setState({ width });
        this.updateData();
    }

    componentWillUnmount() {
        this.signal.cancel('Api sa ruší');
    }

    updateData = () => {
        const data = [];
        try{
            this.props.data.map( async (datas) => {
                const fetch = await axios.get(
                    `http://api.openweathermap.org/data/2.5/weather?q=${datas.name}&appid=502ea6c76f8ffb6acf5b2bc5dfcfb9fe&units=metric&lang=sk`,{
                    cancelToken: this.signal.token,
                });
                const cityData = fetch.data;
    
                data.push(cityData);   
    
                this.props.saveData(data)
            })
        }catch(err){
            if (axios.isCancel(err)) {
                console.log('Error: ', err.message);
              } else {
                console.log(err);
            }
        }
    }

    closeCityCard = (id) => {
        const data = this.props.data.filter( data => data.id !== id);

        this.props.saveData(data)
    }

    render() {
        return(
            <div className="cardsScreen"
                ref={ (divElement) => { this.divElement = divElement } }
            >
                <CityCards
                    cityData={this.props.data} 
                    closeCity={this.closeCityCard}
                    parentWidth={this.state.width}
                    numberOfCards={this.props.data.length}
                />
                <AddCityCard handleToggle={this.props.toggleHomeScreen} />
            </div>
        )
    }
}

export default CardScreen