import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    RAIN,
    CLOUD,
    CLOUDY,
    SNOW,
    SUN,
    WINDY
} from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const getWeatherIconName = (weatherState) => {
    switch(weatherState) {
        case RAIN:
            return 'rain';
        case CLOUD:
            return 'cloud';
        case CLOUDY:
            return 'cloudy';
        case SUN:
            return 'sun';
        case SNOW:
            return 'snow';
        case WINDY:
            return 'windy';
        default:
            return 'day-sunny';
    }
};

const getWeatherIcon = weatherState => {
    return (<WeatherIcons className="wicon" name={getWeatherIconName(weatherState)} size="4x" />);
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperaturetype">C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};
export default WeatherTemperature;