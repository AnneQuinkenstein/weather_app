import React from 'react';
import Title from './Title';
import CurrentWeather from './CurrentWeather';
import DaysList from './DaysList';
import { SwitchTransition, CSSTransition } from "react-transition-group";


const Home = (props) => {
    console.log('props', props.city.id);
    return (
        <div className="fade">
            <div className='current'>
                {props && <Title {...props} onSearch={props.onSearch} />}
                <SwitchTransition>
                    <CSSTransition
                        key={props.city.id}
                        timeout={{
                            enter: 800,
                            exit: 500
                        }}
                        classNames='currentWeather'
                    >
                        <CurrentWeather {...props} />
                    </CSSTransition>
                </SwitchTransition>
            </div>
            <DaysList {...props} />
        </div>
    )
}

export default Home;

// <div className="fade"> außen rum