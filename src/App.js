import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './components/Error';
import Loading from './components/Loading';


const App = () => {

  const [data, setData] = useState(null);
  const [errorState, setErrorState] = useState(false);


  useEffect(() => getLocation(), [])

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      fetchData(lat, lon);
    }, error)
  }

  const error = () => setErrorState(true);

  const fetchData = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => setData(data))
  }

  const onSearch = (cityName) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => setData(data));
  }

  const image = () => {
    if (data) {
      return data.list[0].weather[0].icon
    } else {
      return '04d'
    }
  }

  const setErrorStateFalse = () => {
    setErrorState(false);
  }

  const setErrorStateTrue = () => {
    setErrorState(true);
  }

  let sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + `/images/${image()}.png`})`
  };

  let errorStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + `/images/error.gif`})`
  };


  const renderData = () => {
    if (data) {
      return <Home {...data} onSearch={onSearch} />
    } else if (errorState) {
      return <Error setErrorStateFalse={setErrorStateFalse} onSearch={onSearch} />
    } else {
      return <Loading isLoading={!data} />
    }
  }


  return (
    <div className="container" style={errorState ? errorStyle : sectionStyle} >
      {/* <div className='Navbar'>
        <Navbar setErrorStateTrue={setErrorStateTrue} setErrorStateFalse={setErrorStateFalse} />
      </div> */}
      <div className='Maincomponent'>
        <Switch>
          <Route exact path='/' render={() => renderData()} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
      <div className='Footer'><Footer /></div>
    </div>
  );
}

export default App;