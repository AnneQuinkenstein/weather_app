import React from 'react';


const CurrentWeather = (props) => {
    
    // round to .5 
    const temp = (props.list[0].main.temp*2).toFixed() / 2;
    
    return (
        <div className="currentWeather">
            <div>{props.list[0].weather[0].description}</div>
            <img src={`http://openweathermap.org/img/wn/${props.list[0].weather[0].icon}@2x.png`}/>
            <div><i class='fas fa-temperature-high'></i>&nbsp;&nbsp;{temp}&#176; C</div>
            <div><i class='fas fa-wind'></i> &nbsp;{props.list[0].wind.speed}m/s</div>
        </div>
    )
}

export default CurrentWeather;

 
   