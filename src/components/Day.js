/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { jsx, css, keyframes } from '@emotion/core';

const Day = (props) => {

    const [randNumTopLeft, setRandNumTopLeft] = useState(125);


    const temp = (props.main.temp * 2).toFixed() / 2;

    useEffect(() => {
        setrandNum();
    }, [])

    const setrandNum = () => {
        return setInterval(() => setRandNumTopLeft(Math.floor(Math.random() * 40) + 50), 16000)
    }


    const randNumTopRight = Math.floor(Math.random() * 40) + 30;
    const randNumBottomLeft = Math.floor(Math.random() * 40) + 80;
    const randNumBottomRight = Math.floor(Math.random() * 40) + 50;
    const randNumTopLeft2 = Math.floor(Math.random() * 40) + 60;
    const randNumBottomRight2 = Math.floor(Math.random() * 40) + 35;
    const randNumBottomLeft2 = Math.floor(Math.random() * 40) + 70;
    const randNumTopRight2 = Math.floor(Math.random() * 40) + 80;
    const randNumTopLeft3 = Math.floor(Math.random() * 40) + 50;
    const randNumBottomRight3 = Math.floor(Math.random() * 40) + 30;
    const randNumBottomLeft3 = Math.floor(Math.random() * 40) + 80;
    const randNumTopRight3 = Math.floor(Math.random() * 40) + 50;
    const randNumTopLeft4 = Math.floor(Math.random() * 40) + 60;
    const randNumBottomRight4 = Math.floor(Math.random() * 40) + 30;
    const randNumBottomLeft4 = Math.floor(Math.random() * 40) + 80;
    const randNumTopRight4 = Math.floor(Math.random() * 40) + 50;


    // keyframe for Border-Change Animation
    const morph = keyframes`
    50% {
        border-radius: ${randNumTopLeft3}px ${randNumTopRight3}px ${randNumBottomLeft3}px ${randNumBottomRight3}px / ${randNumTopLeft4}px ${randNumTopRight4}px ${randNumBottomLeft4}px ${randNumBottomRight4}px;
    }
    25%, 75% {
        border-radius: ${randNumTopLeft}px ${randNumTopRight}px ${randNumBottomLeft}px ${randNumBottomRight}px / ${randNumTopLeft2}px ${randNumTopRight2}px ${randNumBottomLeft2}px ${randNumBottomRight2}px;
      }
    0%, 100% {
        border-radius: 70% 90% 90% 70% / 90% 70% 80% 90%;
      }`

    return (
            <div css={css`
        animation: ${morph} 16s ease-in-out ;
        animation-iteration-count: infinite; 
      `} className="Day">
                <Moment format="dddd" className="forcastDay">
                    {props.dt_txt}
                </Moment>
                <div>
                    <img src={`//openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} alt="pic of current weather"/>
                </div>
                <div> {props.weather[0].description}</div>
                <div>&#x1F321;&nbsp;&nbsp;{temp}&#176;C</div>
                <div>&#127786;&nbsp; {props.wind.speed}m/s</div>
            </div>
    )
}

export default Day;

