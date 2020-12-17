import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather(props){
  const [weather, setWeather] = useState({ready: false});
  function convertUnix(timestamp){
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return hours + ':' + minutes.substr(-2);
  }

  function handleResponse(response){
    console.log(response.data);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      date: "Wed, Dec 9 2020, 14:32",
      maximum: Math.round(response.data.main.temp_max),
      minimum: Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      sunrise: convertUnix(response.data.sys.sunrise),
      sunset: convertUnix(response.data.sys.sunset),
      ready: true
    });
  }

  if( weather.ready ) {
    return(
      <div className="Weather">
        <form>
          <input className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                autoFocus="on" />
        </form>
        <div className="row align-items-center outter-row">
          <div className="col-6 weather-main">
            <i class="far fa-snowflake"></i>
            <h1>
              <strong>
              {weather.temperature}
              <span className="unit">°C | °F</span>
              </strong>
            </h1>
            <p className="text-capitalize">{weather.description}</p>
          </div>
          <div className="col-6 description light-background">  
            <h3>{weather.city}, {weather.country}</h3>
            <p>
              {weather.date}
            </p>
            <div className="row justify-content-around">
              <div className="col col-lg-3">
                <div className="weather-card">
                  <h3>
                    <strong>{weather.maximum}
                    <span className="unit">°C</span></strong>
                  </h3>
                  <p>maximum</p>
                </div>
                <div className="weather-card bottom">
                  <h3>
                    <strong>{weather.minimum}
                    <span className="unit">°C</span></strong>
                  </h3>
                  <p>minimum</p>
                </div>
              </div>
              <div className="col col-lg-3">
                <div className="weather-card">
                  <h3>
                    <strong>{weather.wind}
                    <span className="unit">km/h</span></strong>
                  </h3>
                  <p>wind speed</p>
                </div>
                <div className="weather-card bottom">
                  <h3>
                    <strong>{weather.humidity}
                    <span className="unit">%</span></strong>
                  </h3>
                  <p>humidity</p>
                </div>
              </div>
              <div className="col col-lg-3">
                <div className="weather-card">
                  <h3><strong>{weather.sunrise}</strong></h3>
                  <p>sunrise</p>
                </div>
                <div className="weather-card bottom">
                  <h3><strong>{weather.sunset}</strong></h3>
                  <p>sunset</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row forecast light-background">
            Forecast
        </div>
      </div>
    );
  } else {
    const apiKey = "cef6ae7836ecd17a2e06e0819975713e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading . . ."
  }
}

export default Weather;