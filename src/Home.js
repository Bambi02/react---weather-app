import React, { Component } from 'react';
import CityCards from './CityCards';
import FormScreen from './FormScreen';
import AddCityCard from './AddCityCard';
import axios from 'axios';
import Navigation from './Navigation';

class Home extends Component {

    signal = axios.CancelToken.source();

    state = {
        cardScreen: true,
        data: [],
    }

    componentDidMount() {
        this.updateData();
    }

    componentWillUnmount() {
        this.signal.cancel('Api sa ruší');
    }

    getData = () => {
        const data = sessionStorage.getItem('data');
        const formatedData = JSON.parse(data);
        
        return formatedData;
    }

    updateData = () => {
        const data = [];
        try{
            this.getData().map( async (city) => {
                const getData = await axios.get(
                    `http://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=502ea6c76f8ffb6acf5b2bc5dfcfb9fe&units=metric&lang=sk`,{
                    cancelToken: this.signal.token,
                });
                const cityData = getData.data;
    
                data.push(cityData);   
    
                this.setState({ data });
            })
        }catch(err){
            if (axios.isCancel(err)) {
                console.log('Error: ', err.message);
              } else {
                console.log(err);
            }
        }
    }

    handleScreenToggle = () => {
        this.setState({ cardScreen: !this.state.cardScreen });
    }

    //this has to be async otherwise it wont remember 1 lateset closed city
    setData = async (data) => {
        await this.setState({ data });

        const jsonData = JSON.stringify(this.state.data);
        sessionStorage.setItem('data', jsonData);
    }

    saveData = (data) => {
        this.setState(state => ({ 
            data: [...state.data, data],
        }));
        const jsonData = JSON.stringify(this.state.data);
        sessionStorage.setItem('data', jsonData);
    }

    render() {
        if(this.state.cardScreen) {
            return(
                <div className="cardsScreen">
                    <Navigation />
                    <CityCards
                      data={this.state.data} 
                      numberOfCards={this.state.data.length}
                      saveData={this.setData}
                    />
                    <AddCityCard handleScreenToggle={this.handleScreenToggle} />
                </div>
            )
        }

        return(
            <FormScreen 
                handleScreenToggle={this.handleScreenToggle}
                saveData={this.saveData}
                data={this.state.data}
            />
        )
    }
}

export default Home