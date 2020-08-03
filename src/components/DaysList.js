import React, { useState, useEffect } from 'react';
import Day from './Day';

const DaysList = (props) => {

    console.log(props.list)
    const [ dailyData, setdailyData ] = useState([])

   useEffect(() => setdailyData(props.list.filter(data => data.dt_txt.includes('15:00:00'))), [props]);

   // why is it not possible with { } like in the fetch statement? with adding return also ? 
  
    return(
        <>
        <h2>5-days forecast</h2>
        <div className="daysContainer">
            { dailyData.map(data => <Day {...data}/>) }
            
        </div>
        </>
    )
}

export default DaysList;
