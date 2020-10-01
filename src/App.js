/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import NoLocationAllowed from './components/NoLocationAllowed';
import Loading from './components/Loading';
import BodyClassName from 'react-body-classname';
import { jsx } from '@emotion/core'


const App = () => {

  const [data, setData] = useState(null);
  const [errorState, setErrorState] = useState(false);
  const [err, setErr] = useState(null);


  useEffect(() => {

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchData(lat, lon);
      }, error)}
    getLocation();
  },[])


  const error = () => setErrorState(true);

  const fetchData = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => setData(data))
  }

  const onSearch = (cityName) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`)
      .then(res => {
        if (res.status === 404) {
          throw new Error("I didn't find this city. Please try again!");
        } else {
          setErr(null);
          return res.json();
        };
      })
      .then(data => setData(data), err => setErr(err))
  }

  const image = () => {
    if (data) {
      console.log(data);
      return data.list[0].weather[0].icon
    } else {
      return '04d'
    }
  }

  const setErrorStateFalse = () => {
    setErrorState(false);
  }

  let sectionStyle =
    (process.env.PUBLIC_URL + `/images/${image()}.png`)
    ;

  let errorStyle =
    (process.env.PUBLIC_URL + `/images/error.gif`)
    ;

  const renderData = () => {
    if (data) {
      return <Home {...data} onSearch={onSearch} err={err} />
    } else if (errorState) {
      return <NoLocationAllowed setErrorStateFalse={setErrorStateFalse} onSearch={onSearch} />
    } else {
      return <Loading isLoading={!data} />
    }
  }

  return (
    <BodyClassName className="container" css={{ backgroundImage: `url("${errorState ? errorStyle : sectionStyle}")` }}>
      <div className="content">
        <div className='Maincomponent fade'>
          {renderData()}
        </div>
        <div className='Footer'><Footer /></div>
      </div>
    </BodyClassName>
  );
}

export default App;
