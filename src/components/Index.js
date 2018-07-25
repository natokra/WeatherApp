import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherLocation/WeatherData/Index';
import transformWeather from './../services/transformWeather';
import { SNOW } from './../constants/weathers';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const data1 = {
    temperature: 20,
    weatherState: SNOW,
    humidity: 10,
    wind: '10 m/s'
}

const location = "Buenos Aires,ar";
const api_key = "d43bdb29edb7d1135e7e0b7bcf8d5a28";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data1
        };
    }
    
    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });
        });
    }

    render = () => {
        const {city, data} = this.state;
        return (
        <div>
            <Location city={city}/>
            <WeatherData data={data} />
            <button className="btn btn-primary" onClick={this.handleUpdateClick}>Refresh</button>
        </div>);
    };
}

export default WeatherLocation;