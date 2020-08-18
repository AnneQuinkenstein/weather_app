import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';

const Day = (props) => {

    const [randNumTopLeft, setRandNumTopLeft] = useState(125);


    const temp = (props.main.temp * 2).toFixed() / 2;

    useEffect(() => {
        setrandNum();
    }, [])
    
    const setrandNum = () => {
        return setInterval(() => setRandNumTopLeft(Math.floor(Math.random() * 40) + 50), Math.floor(Math.random() * 1000)+500)
    }
    

    const randNumTopRight = Math.floor(Math.random() * 40) + 30;
    const randNumBottomLeft = Math.floor(Math.random() * 40) + 80;
    const randNumBottomRight = Math.floor(Math.random() * 40) + 50;


    const style = {
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


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        console.log('start timer');
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log('stop timer', this.timerID);
        clearInterval(this.timerID);
    }

    tick() {
        console.log('tick is called');
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
