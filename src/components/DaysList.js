import React, { useState, useEffect } from 'react';
import Day from './Day';

const DaysList = (props) => {

    const [ dailyData, setdailyData ] = useState([])

   useEffect(() => {
       selectData();
    }, [props]);

   const selectData = () => setdailyData(props.list.filter(data => data.dt_txt.includes('15:00:00')));
  

    return(
        <>
        <h2>5-days forecast</h2>
        <div className="daysContainer">
            { dailyData.map((data) => <Day {...data} key={data.dt_txt}/>) }    
        </div>
        </>
    )
}

export default DaysList;
