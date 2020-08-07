import React, { Component } from 'react';
import axios from 'axios';
import LoadScreen from './LoadScreen';
import ErrorScreen from './ErrorScreen'

class CityDetail extends Component{

    signal = axios.CancelToken.source();

    state={
        err: null,
        cityData: null,
        cityDetails: null,
    }

    componentDidMount() {
        this.loadData();
    }

    componentWillUnmount() {
        this.signal.cancel('Api sa ruší');
    }
    
    loadData = async () => {
        try{
            const cityID = this.props.match.params.id
            const loadData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=502ea6c76f8ffb6acf5b2bc5dfcfb9fe&units=metric&lang=sk`,{
                cancelToken: this.signal.token,
            });
            const cityData = loadData.data
            const lat = cityData.coord.lat;
            const lon = cityData.coord.lon;
            const loadDetails = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=502ea6c76f8ffb6acf5b2bc5dfcfb9fe&units=metric&lang=sk`,{
                cancelToken: this.signal.token,
            });
            const cityDetails = loadDetails.data;
    
            this.setState({
                cityData,
                cityDetails
            })
        }catch(err) {
            if (axios.isCancel(err)) {
                console.log('Error: ', err.message);
            }else{
                this.setState({ err })
            }
        }
    }

    render(){
        const { cityData, cityDetails, err } = this.state;

        if(err){
            return(
                <ErrorScreen />
            )
        }else if(cityDetails) {
            return(
                <div>
                    {cityData.name}
                    {cityDetails.timezone}
                </div>
            )
        }else{
            return(
                <LoadScreen />
            )
        }  
    }
}

export default CityDetail