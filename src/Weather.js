import React, { useState } from "react";
import FormattedDate from "./FormattedDate"
import axios from "axios";
import "./Weather.css";

function Weather(props){
  const [weather, setWeather] = useState({ready: false});
  function handleResponse(response){
    console.log(response.data);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      maximum: Math.round(response.data.main.temp_max),
      minimum: Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
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
              <FormattedDate date={weather.date}/>
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
                  <h3><strong>{("0" + weather.sunrise.getHours()).substr(-2)}:{("0" + weather.sunrise.getMinutes()).substr(-2)}</strong></h3>
                  <p>sunrise</p>
                </div>
                <div className="weather-card bottom">
                  <h3><strong>{("0" + weather.sunset.getHours()).substr(-2)}:{("0" + weather.sunset.getMinutes()).substr(-2)}</strong></h3>
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