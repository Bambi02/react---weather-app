import React, { Component } from 'react';
import FormCard from './FormCard';
import axios from 'axios';

class FormScreen extends Component {

    signal = axios.CancelToken.source();

    state = {
        formNotification: false,
        notifColor: '',
        input: "",
    }

    componentWillUnmount() {
        this.signal.cancel('Api sa ruší');
        clearTimeout(this.handleTimeout);
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=502ea6c76f8ffb6acf5b2bc5dfcfb9fe&units=metric&lang=sk`;

        try{
            const fetch = await axios.get(API, {
                cancelToken: this.signal.token,
            });
            const data = fetch.data;

            if(this.props.data.filter(city => city.name === data.name).length > 0){
                this.errorNotif('Také mesto už máš pridané');
                return;
            }

            this.props.saveData(data)

            this.successNotif('Mesto pridané');
        }catch(err) { 
            if (axios.isCancel(err)) {
                console.log('Error: ', err.message);
            }else {
                console.log(err);
                this.errorNotif('Také mesto neexistuje');
            }
        }     
    }

    errorNotif = (text) => {
        this.setState({
            formNotification: text,
            notifColor: 'rgba(255, 58, 44, 0.925)',
            input:''
        });

        this.clearNotif();
    }

    successNotif = (text) => {
        this.setState({
            formNotification: text,
            notifColor: 'rgb(105, 205, 39)',
            input:''
        });
        
        this.clearNotif();
    }

    clearNotif = () => this.handleTimeout = setTimeout(() => this.setState({ formNotification: false }), 1500);

    render() {
        return(
            <div className="formScreen">
                <FormCard
                    notification={this.state.formNotification}
                    notifColor={this.state.notifColor}
                    inputValue={this.state.input}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    toggleScreen={this.props.toggleScreen}
                />
            </div>
        )
    }
}

export default FormScreen