/** @jsx jsx */
import React, { useEffect, useState, useRef } from 'react';
import { jsx, css, keyframes } from '@emotion/core'; 

const CurrentWeather = (props) => {

    const [randNumTopLeft, setRandNumTopLeft] = useState(125);
    const prevRandNumTopLeft = usePrevious(randNumTopLeft);

    const [randNumTopRight, setRandNumTopRight] = useState(125);
    const prevRandNumTopRight = usePrevious(randNumTopRight);

    const [randNumBottomLeft, setRandNumBottomLeft] = useState(125);
    const prevRandNumBottomLeft = usePrevious(randNumBottomLeft);

    const [randNumBottomRight, setRandNumBottomRight] = useState(125);
    const prevRandNumBottomRight = usePrevious(randNumBottomRight);

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        }, [value]);
        return ref.current;
    }

    useEffect(() => {
        return setInterval(() =>
            setRandNumTopLeft(Math.floor(Math.random() * 40) + 50)
            , 1000)
    }, [])

    useEffect(() => {
        return setInterval(() =>
            setRandNumTopRight(Math.floor(Math.random() * 40) + 150)
            , 1000)
    }, [])

    useEffect(() => {
        return setInterval(() =>
            setRandNumBottomLeft(Math.floor(Math.random() * 40) + 200)
            , 1000)
    }, [])

    useEffect(() => {
        return setInterval(() =>
            setRandNumBottomRight(Math.floor(Math.random() * 40) + 100)
            , 1000)
    }, [])

    // round to .5 
    const temp = (props.list[0].main.temp * 2).toFixed() / 2;

    const border = keyframes`
    from {
        border-radius: ${prevRandNumTopLeft}px ${prevRandNumTopRight}px ${prevRandNumBottomLeft}px ${prevRandNumBottomRight}px;
    }
  
    to {
        border-radius: ${randNumTopLeft}px ${randNumTopRight}px ${randNumBottomLeft}px ${randNumBottomRight}px;
    }
  `

    return (
        <div css={css`
        animation: ${border} 5000ms ease-in infinite;
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

// borderRadius: `${randNumTopLeft} px ${ randNumTopRight } px ${ randNumBottomLeft } px ${ randNumBottomRight } px`;
// borderRadius: `${ prevRandNumTopLeft }px ${ prevRandNumTopRight }px ${ prevRandNumBottomLeft }px ${ prevRandNumBottomRight }px`;

export default CurrentWeather;


