import React, { Component } from 'react';
import axios from 'axios';
import LoadScreen from './LoadScreen';
import ErrorScreen from './ErrorScreen'
import DetailScreen from './DetailScreen'

class CityDetail extends Component{

    signal = axios.CancelToken.source();

    state={
        err: null,
        currentData: null,
        forecastData: null,
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
            const getData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=502ea6c76f8ffb6acf5b2bc5dfcfb9fe&units=metric&lang=sk`,{
                cancelToken: this.signal.token,
            });
            const currentData = getData.data
            const lat = currentData.coord.lat;
            const lon = currentData.coord.lon;
            const getForecast = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={hourly}&appid=502ea6c76f8ffb6acf5b2bc5dfcfb9fe&units=metric&lang=sk`,{
                cancelToken: this.signal.token,
            });
            const forecastData = getForecast.data;
    
            this.setState({
                currentData,
                forecastData
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
        const { currentData, forecastData, err } = this.state;

        if(err){
            return(
                <ErrorScreen />
            )
        }else if(forecastData) {
            return(
                <DetailScreen 
                    currentData={currentData}
                    forecastData={forecastData}
                />
            )
        }else{
            return(
                <LoadScreen />
            )
        }  
    }
}

export default CityDetail