import React, { Component } from 'react';
import CityCards from './CityCards';
import FormScreen from './FormScreen';
import AddCityCard from './AddCityCard';
import axios from 'axios';
import CardScreen from './CardScreen';

class Home extends Component {

    signal = axios.CancelToken.source();

    state = {
        cardScreen: true,
        data: [{"coord":{"lon":17.11,"lat":48.15},"weather":[{"id":801,"main":"Clouds","description":"takmer jasno","icon":"02d"}],"base":"stations","main":{"temp":21.05,"feels_like":19.13,"temp_min":21,"temp_max":21.11,"pressure":1015,"humidity":56},"visibility":10000,"wind":{"speed":3.6,"deg":100},"clouds":{"all":16},"dt":1596353162,"sys":{"type":1,"id":7046,"country":"SK","sunrise":1596338932,"sunset":1596392798},"timezone":7200,"id":3060972,"name":"Bratislava","cod":200},{"coord":{"lon":19.17,"lat":49.17},"weather":[{"id":800,"main":"Clear","description":"jasná obloha","icon":"01d"}],"base":"stations","main":{"temp":15,"feels_like":13.92,"temp_min":15,"temp_max":15,"pressure":930,"humidity":62},"visibility":10000,"wind":{"speed":0.8,"deg":196},"clouds":{"all":9},"dt":1596352992,"sys":{"type":3,"id":2019267,"country":"SK","sunrise":1596338237,"sunset":1596392504},"timezone":7200,"id":3056506,"name":"Žilinský","cod":200}],
        width:0
    }

    componentDidMount() {
        const width = this.divElement.clientWidth;
        this.setState({ width });
        this.updateData();
    }

    componentWillUnmount() {
        this.signal.cancel('Api sa ruší');
        clearTimeout(this.handleTimeout);
    }

    updateData = () => {
        const data = [];
        try{
            this.state.data.map( async (datas) => {
                const fetch = await axios.get(
                    `http://api.openweathermap.org/data/2.5/weather?q=${datas.name}&appid=502ea6c76f8ffb6acf5b2bc5dfcfb9fe&units=metric&lang=sk`,{
                    cancelToken: this.signal.token,
                });
                const cityData = fetch.data;
    
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

    toggleHomeScreen = () => {
        this.setState({ cardScreen: !this.state.cardScreen });
    }

    closeCityCard = (id) => {
        const data = this.state.data.filter( data => data.id !== id);

        this.setState({ data });
    }

    saveData = (data) => {
        this.setState(state => ({ 
            data: [...state.data, data],
        }))
    }

    render() {
        if(this.state.cardScreen) {
            return(
                <div className="cardsScreen"
                    ref={ (divElement) => { this.divElement = divElement } }
                >
                    <CityCards
                      cityData={this.state.data} 
                      closeCity={this.closeCityCard}
                      parentWidth={this.state.width}
                      numberOfCards={this.state.data.length}
                    />
                    <AddCityCard handleToggle={this.toggleHomeScreen} />
                </div>
            )
        }

        return(
            <FormScreen 
                toggleScreen={this.toggleHomeScreen}
                saveData={this.saveData}
                data={this.state.data}
            />
        )
    }
}

export default Home