

<p align="center">
  <a href="mailto:a.quinkenstein@gmail.com"><img src="https://image.flaticon.com/icons/svg/725/725643.svg" height="20" width="20" /></a>
  <a href="https://linkedin.com/in/AnneQuinkenstein"><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" height="20"     width="20" /></a>
</p>

<!-- PROJECT LOGO -->

  <h1 align="center">WEATHER APP</h3>

<br />
<p align="center">
  <a href="https://weather-aquin.netlify.app/">
    <img src="https://drive.google.com/file/d/1N2PWMG0Bt5QbvF0pG7BGcIhOYgleXIZb/view?usp=sharing" alt="WeatherappPic" width="300" height="160">
    <img src="https://drive.google.com/file/d/1N2PWMG0Bt5QbvF0pG7BGcIhOYgleXIZb/view?usp=sharing" alt="WeatherappPic" onerror="this.onerror=null;this.src='i.imgur.com/M00gkyA.jpg'" />
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

Librarys
- [Moment](https://www.npmjs.com/package/react-moment)
- [Emotion](https://emotion.sh/docs/introduction)
- [Body-Classname](https://www.npmjs.com/package/react-body-classname)
- [React Icons](https://react-icons.github.io)
- [React Spinners](https://www.npmjs.com/package/react-spinners)


APIs
-[Open Weather API](https://openweathermap.org/api)

## Special Gotchas 
### Fetch Geolocation

```javascript 
 const getLocation = () => {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchData(lat, lon);
      }, error)}
``` 
### Fetch Weatherdata & Errorhandling 

```javascript 
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
``` 

#### Hidden Key
Key for open Weather APIs is hidden in .env file, which is part of .gitignore to avoid pushing it to github

#### Open API Fetch
 The weather is either pulled with the latitude/ longitude or accourding to a city with is typed in. 

#### Error-Handling
 If the typed in City-name is not known by the API, there should be thrown an error to inform the user. 
  
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
