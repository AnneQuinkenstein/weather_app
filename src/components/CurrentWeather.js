import React from 'react';


const CurrentWeather = (props) => {

    // round to .5 
    const temp = (props.list[0].main.temp * 2).toFixed() / 2;

    const randNumTopLeft = Math.floor(Math.random() * 40) + 120;
    const randNumTopRight= Math.floor(Math.random() * 40) + 150;
    const randNumBottomLeft= Math.floor(Math.random() * 40) + 200;
    const randNumBottomRight= Math.floor(Math.random() * 40) + 100;

    const style={
        borderRadius: `${randNumTopLeft}px ${randNumTopRight}px ${randNumBottomLeft}px ${randNumBottomRight}px`, 
    }

    return (
        <div className="currentWeather" style={style}>
            <div className="pic">
                <img src={`http://openweathermap.org/img/wn/${props.list[0].weather[0].icon}@2x.png`} />
            </div>
            <div className="description">{props.list[0].weather[0].description}</div>
            <div className="metrics">
                <div>&#x1F321;&nbsp;&nbsp;{temp}&#176;C&nbsp;&nbsp; </div>
                <div>&#127786; &nbsp;{props.list[0].wind.speed}m/s </div>
            </div>
        </div>
    )
}

export default CurrentWeather;


