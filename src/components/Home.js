import React from 'react';
import Title from './Title';
import CurrentWeather from './CurrentWeather';
import Search from './Search';
import DaysList from './DaysList';


const Home = (props) => {
    return (
        <div>
            <Search onSearch={props.onSearch} />
            {props && <Title {...props} />}
            <CurrentWeather {...props} />
            <DaysList {...props} />
        </div>
    )
}

export default Home;
