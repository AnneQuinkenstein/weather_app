import React from 'react';


const CurrentWeather = (props) => {
    
    // round to .5 
    const temp = (props.list[0].main.temp*2).toFixed() / 2;
    const feltTemp = (props.list[0].main.feels_like*2).toFixed() / 2;

    return (
        <div className="currentWeather">
            <div>{props.list[0].weather[0].description}</div>
            <img src={`http://openweathermap.org/img/wn/${props.list[0].weather[0].icon}@2x.png`}/>
            <div>Temperatur: {temp}</div>
            <div>felt Temperatur: {feltTemp}</div>
        </div>
    )
}

export default CurrentWeather;

 
   