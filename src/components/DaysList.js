import React, { useState, useEffect } from 'react';
import Day from './Day';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const DaysList = (props) => {

    const [dailyData, setdailyData] = useState([])

    useEffect(() => {
        selectData();
    }, [props]);

    const selectData = () => setdailyData(props.list.filter(data => data.dt_txt.includes('15:00:00')));

    return (
        <>
            <h2>5-days forecast</h2>
            <div className="daysContainer">
                    {dailyData.map((data) => 
                    <Day {...data} key={data.dt_txt} /> 
                    )}
            </div>
        </>
    )
}

export default DaysList;


// <SwitchTransition>
// <CSSTransition
//     key={props.city.id}
//     timeout={{
//         enter: 800,
//         exit: 500
//     }}
//     classNames='currentWeather'
// >