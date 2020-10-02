import React from 'react';
import { WiThermometerExterior } from 'react-icons/wi';
import { WiStrongWind } from 'react-icons/wi';


const CurrentWeather = (props) => {

    // round Temperatur to .5 
    const temp = (props.list[0].main.temp * 2).toFixed() / 2;

    return (
        <div className='currentWeather'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="pic">
                <img src={`//openweathermap.org/img/wn/${props.list[0].weather[0].icon}@2x.png`}  alt="display current weather"/>
            </div>
            <div className="description">{props.list[0].weather[0].description}</div>
            <div className="metrics">
                <div><WiThermometerExterior/>{temp}&#176;C&nbsp;&nbsp; </div>
                <div><WiStrongWind/> {props.list[0].wind.speed}m/s </div>
            </div>
        </div>
    )
}

export default CurrentWeather;


