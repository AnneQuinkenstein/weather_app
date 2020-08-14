import React from 'react';
import Moment from 'react-moment';

const Day = (props) => {
   
    const temp = (props.main.temp * 2).toFixed() / 2;

    const randNumTopLeft = Math.floor(Math.random() * 40) + 50;
    const randNumTopRight= Math.floor(Math.random() * 40) + 30;
    const randNumBottomLeft= Math.floor(Math.random() * 40) + 80;
    const randNumBottomRight= Math.floor(Math.random() * 40) + 50;

    const style={
        borderRadius: `${randNumTopLeft}px ${randNumTopRight}px ${randNumBottomLeft}px ${randNumBottomRight}px`, 
    }

    return (
        <div className="Day" style={style}>
            <Moment format="dddd" className="forcastDay">
                {props.dt_txt}
            </Moment>
            <div>
                <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} />
            </div>
            <div> {props.weather[0].description}</div>
            <div>&#x1F321;&nbsp;&nbsp;{temp}&#176;C</div>
            <div>&#127786;&nbsp; {props.wind.speed}m/s</div>
        </div>
    )
}

export default Day;
