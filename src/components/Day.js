import React from 'react';
import Moment from 'react-moment';

const Day = (props) => {
    console.log(props);
    const temp = (props.main.temp * 2).toFixed() / 2;
    const feltTemp = (props.main.feels_like * 2).toFixed() / 2;

    return (
        <div className="Day">
            <Moment format="dddd" className="forcastDay">
                {props.dt_txt}
            </Moment>
            <div> {props.weather[0].description}</div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} />
            </div>
            <div>Temperatur: {temp}</div>
            <div>felt Temperatur: {feltTemp}</div>
        </div>
    )
}

export default Day;
