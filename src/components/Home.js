import React from 'react';
import Title from './Title';
import CurrentWeather from './CurrentWeather';
import DaysList from './DaysList';


const Home = (props) => {
    return (
        <div className="fade">
            <div className='current'>
            {props && <Title {...props} onSearch={props.onSearch} />}
            <CurrentWeather {...props} />
            </div>
            <DaysList {...props} />
        </div>
    )
}

export default Home;
