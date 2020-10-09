<p align="center">
  <a href="mailto:a.quinkenstein@gmail.com"><img src="https://image.flaticon.com/icons/svg/725/725643.svg" height="20" width="20" /></a>
  <a href="https://linkedin.com/in/AnneQuinkenstein"><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" height="20"     width="20" /></a>
</p>

<!-- PROJECT LOGO -->

  <h1 align="center">WEATHER APP</h3>

<br />
<p align="center">
  <a href="https://weather-aquin.netlify.app/">
    <img src="https://i.imgur.com/M00gkyA.jpg" alt="WeatherappPic" width="300" height="160">
  </a>

  <p align="center">
    If you allow to grab your Device Location or type in a City of your Choice, the WeatherApp will display the weather of today in a moving clouf & a 5-days forecast. A picture of the weather accourding to day or nighttime will appear in the background. 
    <br />
    <br />
    <a href="https://weather-aquin.netlify.app/">Demo</a>
    ·
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

- [Moment](https://www.npmjs.com/package/react-moment)
- [Emotion](https://emotion.sh/docs/introduction)
- [Body-Classname](https://www.npmjs.com/package/react-body-classname)
- [React Icons](https://react-icons.github.io)
- [React Spinners](https://www.npmjs.com/package/react-spinners)

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

![Errormessage for wrong City](https://i.imgur.com/cfkE4Q5.png)

#### Error-Handling

If the typed in City-name is not known by the API, there should be thrown an error to inform the user.

### Animations

![CurrentWeahter Blob](https://i.imgur.com/j05FML9.png)

#### Blob-Animation of Current Weather
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

```javascript
/** @jsx jsx */
import BodyClassName from 'react-body-classname';
import { jsx } from '@emotion/core'

let sectionStyle = (process.env.PUBLIC_URL + `/images/${image()}.png`);

<BodyClassName className="container" css={{ backgroundImage: `url("${errorState ? errorStyle : sectionStyle}")` }}>

``` 

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
