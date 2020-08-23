import React, { Component } from 'react';
import axios from 'axios';
import LoadScreen from './LoadScreen';
import ErrorScreen from './ErrorScreen';
import DetailScreen from './DetailScreen';


class CityDetail extends Component{

    signal = axios.CancelToken.source();

    state={
        err: null,
        currentData: null,
        forecastData: null,
        threeHrsData:null,
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
            const getCurrent = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=502ea6c76f8ffb6acf5b2bc5dfcfb9fe&units=metric&lang=sk`,{
                cancelToken: this.signal.token,
            });
            const currentData = getCurrent.data
            const getThreeHrs = await axios.get(
                `http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=502ea6c76f8ffb6acf5b2bc5dfcfb9fe&units=metric&lang=sk`,{
                cancelToken: this.signal.token,
            });
            const threeHrsData = getThreeHrs.data
            const { lat, lon } = currentData.coord;
            const getForecast = await axios.get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={minutely}&appid=502ea6c76f8ffb6acf5b2bc5dfcfb9fe&units=metric&lang=sk`,{
                cancelToken: this.signal.token,
            });
            const forecastData = getForecast.data;
    
            this.setState({
                currentData,
                forecastData,
                threeHrsData,
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
        const { currentData, forecastData, threeHrsData, err } = this.state;

        if(err){
            return(
                <ErrorScreen />
            )
        }else if(forecastData) {
            return(
                <>
                    <DetailScreen 
                        currentData={currentData}
                        forecastData={forecastData}
                        threeHrsData={threeHrsData}
                        match={this.props.match}
                    />
                </>
            )
        }else{
            return(
                <LoadScreen />
            )
        }  
    }
}

export default CityDetail