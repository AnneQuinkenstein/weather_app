<p align="center">
  <a href="mailto:a.quinkenstein@gmail.com"><img src="https://image.flaticon.com/icons/svg/725/725643.svg" height="20" width="20" /></a>
  <a href="https://linkedin.com/in/AnneQuinkenstein"><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" height="20"     width="20" /></a>
</p>

<!-- PROJECT LOGO -->

  <h1 align="center">WEATHER APP</h3>

<br />
<p align="center">
  <a href="https://weather-aquin.netlify.app/">
    <img src="https://i.imgur.com/5Yo1eIe.jpg" alt="WeatherappPic" width="300" height="160">
  </a>

  <p align="center">
    If you allow to grab your Device Location or type in a City of your Choice, the WeatherApp will display the weather of today in a moving clouf & a 5-days forecast. A picture of the weather accourding to day or nighttime will appear in the background. 
    <br />
    <br />
    <a href="https://weather-aquin.netlify.app/">Demo</a>
    <a href="https://github.com/AnneQuinkenstein/weather_app/issues">Report Bug</a>
  </p>
</p>

## Built With

- [React](https://reactjs.org/)
- [React Hooks](https://reactjs.org/)
- [React Transition Group](http://reactcommunity.org/react-transition-group/)
- [SCSS](https://sass-lang.com/)
- [Flexbox](https://dev.to/annequinkenstein/til-css-flexbox-glo)

#### Librarys

- [Moment](https://www.npmjs.com/package/react-moment) to display Dates/Days
- [Emotion](https://emotion.sh/docs/introduction) to access CSS in JSX
- [Body-Classname](https://www.npmjs.com/package/react-body-classname) provides a declarative way to specify document.body.className 
- [React Icons](https://react-icons.github.io) - for Weather Icons
- [React Spinners](https://www.npmjs.com/package/react-spinners) for Loading - Page

#### APIs

- [Open Weather API](https://openweathermap.org/api)

## Special Gotchas

### Fetch Geolocation

![Computer Question for GeoLocation](https://i.imgur.com/OsIBFEN.png)

```javascript
const getLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchData(lat, lon);
  }, error);
};
```

### Fetch Weatherdata & Errorhandling

```javascript
const onSearch = (cityName) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
  )
    .then((res) => {
      if (res.status === 404) {
        throw new Error("I didn't find this city. Please try again!");
      } else {
        setErr(null);
        return res.json();
      }
    })
    .then(
      (data) => setData(data),
      (err) => setErr(err)
    );
};
```

#### Hidden Key

Key for open Weather APIs is hidden in .env file, which is part of .gitignore to avoid pushing it to github

#### Open API Fetch

The weather is either pulled with the latitude/ longitude or accourding to a city with is typed in.

#### Error-Handling

If the typed in City-name is not known by the API, it returns 404 + there will be thrown an error to inform the user.
![Errormessage for wrong City](https://i.imgur.com/cfkE4Q5.png)

### Show different Pages accourding to an event
Show either 
Sucess -> if
- Geolocation is allowed
- Data from Open Weather API is fetched 
 
Error -> if 
- Geolocation is not allowed

Loading -> if 
- Data is on it's way 

```javascript

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
[...]
    <div className='Maincomponent fade'>
       {renderData()}
    </div>
[...]  
  );
``` 

### Animations

#### Fading in Animations on changing Sites with React Transition Group

I used React Switch Transition, because i wanted to control the render between state transitions. The Current Weather Blub is animated, if the city is changing and a new Blub is displayed. The part in JSX has a key for each Weather + and a timeset which is the mirrowed in the CSS Part, where is set what is going to happen in the time-in & -out. 

```javascript
 <SwitchTransition>
      <CSSTransition
        key={props.city.id}
        timeout={{
            enter: 800,
            exit: 50
        }}
       classNames='currentWeather'
                    >
       <CurrentWeather {...props} />
      </CSSTransition>
 </SwitchTransition>
``` 
There are 3 stages for Entry & Exit, which are [explained here](http://reactcommunity.org/react-transition-group/switch-transition) & the enter animation in CSS: 

```css
.currentWeather-enter {
  transform: scale(0.98);
  opacity: 0.5;
}
.currentWeather-enter-active {
  transform: scale(1);
  opacity: 1;
  transition: transform 0.8s cubic-bezier(0.37, 0, 0.63, 1), opacity 0.8s;
}
```

#### Blob-Animation of Current Weather
![CurrentWeahter Blob](https://i.imgur.com/j05FML9.png)

```html
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<div className="pic">
...
</div>
``` 
```css
servral -> 
 span {
        position: absolute;
        top: 0;
        left: 0;
        background: radial-gradient(#ffffff50 90%, #ffffff);
        &:nth-child {
          border-radius: different border-radius to different childs; 
          animation: rotate animation; 
        }
      }
```

#### Border-Animation of 5-day Forecast
![5-days forecast](https://i.imgur.com/Vq4w4fL.png)

import emotion Libary to use CSS with Javascript 
```javascript
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
``` 
use a random Number to set the borders in a time intervall 
```javascript
 const setrandNum = () => {
    return setInterval(
      () => setRandNumTopLeft(Math.floor(Math.random() * 40) + 50),
      16000
    );
  };

   const morph = keyframes`
    50% {
        border-radius: ${randNumTopLeft3}px ${randNumTopRight3}px ${randNumBottomLeft3}px ${randNumBottomRight3}px / ${randNumTopLeft4}px ${randNumTopRight4}px ${randNumBottomLeft4}px ${randNumBottomRight4}px;
    } .... 

     <div 
      css={css`
        animation: ${morph} 16s ease-in-out;
        animation-iteration-count: infinite;
      `}
      className="Day"
    >
``` 

#### Changing Background-Pics Animations

The Open Weather App sents a Code for each Weather Conditions at Day & Night-Time. I got royalty free pics from [Unsplash](https://unsplash.com/) and [Pexels](https://www.pexels.com/). I renamed the pics like the codes and put the Codes as a variabel in the urls for the background-pic. To access the CSS i used the libary emotion + to access the body tag to change the background-pic on body i used the react-body-classname library. 

```javascript
/** @jsx jsx */
import BodyClassName from 'react-body-classname';
import { jsx } from '@emotion/core'

let sectionStyle = (process.env.PUBLIC_URL + `/images/${image()}.png`);

<BodyClassName className="container" css={{ backgroundImage: `url("${errorState ? errorStyle : sectionStyle}")` }}>

``` 

### Calculations 

#### Round a num

  const temp = (props.main.temp * 2).toFixed() / 2;
  Rounded to .5 



## How to get started

    git clone https://github.com/AnneQuinkenstein/weather_app
    cd weather_app
    yarn install
    yarn start

## Contact

<p> <a target="_blank" href="https://www.linkedin.com/in/anne-quinkenstein"><img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"></img></a>
<a target="_blank" href="mailto:a.quinkenstein@gmail.com"><img src="https://img.shields.io/badge/-Gmail-D14836?style=for-the-badge&logo=Gmail&logoColor=white"></img></a>
</p>

<img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="60"> <em>Don't hesitate to get in touch!</em>
