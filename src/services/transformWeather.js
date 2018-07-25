
import convert from 'convert-units';

import { SNOW } from './../constants/weathers';

const getTemperature = kelvin => {
    return convert(kelvin).from('K').to('C').toFixed(2);
}

const getWeatherState = weather => {
    return SNOW;
}

const transformWeather = (weather_data) => {
    const { humidity, temp, } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(this.weather);
    const temperature = getTemperature(temp);
    const data = {
        humidity,
        temperature,
        wind: `${speed} m/s`,
        weatherState
    }
    return data;
}

export default transformWeather;