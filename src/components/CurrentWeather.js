/** @jsx jsx */
import React, { useEffect, useState, useRef } from 'react';
import { jsx, css, keyframes } from '@emotion/core';

const CurrentWeather = (props) => {

    const [randNumTopLeft, setRandNumTopLeft] = useState(125);
    const [randNumTopRight, setRandNumTopRight] = useState(130);
    const [randNumBottomLeft, setRandNumBottomLeft] = useState(50);
    const [randNumBottomRight, setRandNumBottomRight] = useState(70);
  
    // round Temperatur to .5 
    const temp = (props.list[0].main.temp * 2).toFixed() / 2;

    //create Random Numbers for Changes in Border
    useEffect(() => {
        numTopLeft();
        numTopRight();
        numBottomLeft();
        numBottomRight();
    }, [])

    const numTopLeft = () => {
        return setInterval(() =>
            setRandNumTopLeft(Math.floor(Math.random() * 40) + 200)
            , 5000)
    }

    const numTopRight = () => {
        return setInterval(() =>
            setRandNumTopRight(Math.floor(Math.random() * 40) + 150)
            , 5000)
    }

    const numBottomLeft = () => {
        return setInterval(() =>
            setRandNumBottomLeft(Math.floor(Math.random() * 40) + 130)
            , 5000)
    }

    const numBottomRight = () => {
        return setInterval(() =>
            setRandNumBottomRight(Math.floor(Math.random() * 40) + 70)
            , 5000)
    }

    // store the privious Value for Animation of Border - Changes 
    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        }, [value]);
        return ref.current;
    }
    const prevRandNumTopLeft = usePrevious(randNumTopLeft);
    const prevRandNumTopRight = usePrevious(randNumTopRight);
    const prevRandNumBottomLeft = usePrevious(randNumBottomLeft);
    const prevRandNumBottomRight = usePrevious(randNumBottomRight);


    // keyframe for Border-Change Animation
    const border = keyframes`
    0% {
        border-radius: ${prevRandNumTopLeft}px ${prevRandNumTopRight}px ${prevRandNumBottomLeft}px ${prevRandNumBottomRight}px;
    }
  
    100% {
        border-radius: ${randNumTopLeft}px ${randNumTopRight}px ${randNumBottomLeft}px ${randNumBottomRight}px;
    }
  `

    return (
        <div css={css`
        animation: ${border} 5000ms linear infinite;
      `} className='currentWeather'>
            <div className="pic">
                <img src={`http://openweathermap.org/img/wn/${props.list[0].weather[0].icon}@2x.png`} />
            </div>
            <div className="description">{props.list[0].weather[0].description}</div>
            <div className="metrics">
                <div>&#x1F321;&nbsp;&nbsp;{temp}&#176;C&nbsp;&nbsp; </div>
                <div>&#127786; &nbsp;{props.list[0].wind.speed}m/s </div>
            </div>
        </div>
    )
}

export default CurrentWeather;


