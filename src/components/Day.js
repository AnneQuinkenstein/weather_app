import React from 'react';
import Moment from 'react-moment';

const Day = (props) => {
   
    const temp = (props.main.temp * 2).toFixed() / 2;
      
    return (
        <div className="Day">
            <Moment format="dddd" className="forcastDay">
                {props.dt_txt}
            </Moment>
            <div>
                <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} />
            </div>
            <div> {props.weather[0].description}</div>
            <div><i class='fas fa-temperature-high'></i>&nbsp;&nbsp;{temp}&#176; C</div>
            <div><i class='fas fa-wind'></i> &nbsp; {props.wind.speed}m/s</div>
        </div>
    )
}

export default Day;
