import React, { Component } from 'react';
import CityCards from './CityCards';
import AddCityCard from './AddCityCard';
import axios from 'axios';

class CardScreen extends Component {

    signal = axios.CancelToken.source();

    componentDidMount() {
        //this.updateData();
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

    render() {
        return(
            <div className="cardsScreen">
                <CityCards
                    data={this.props.data} 
                    numberOfCards={this.props.numberOfCards}
                    saveData={this.props.saveData}
                />
                <AddCityCard handleToggle={this.props.handleToggle} />
            </div>
        )
    }
}

export default CardScreen