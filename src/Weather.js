import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";

function Weather(){
  const [weather, setWeather] = useState({ready: false});
  const [city, setCity] = useState("");
  function handleResponse(response){
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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

  function search() {
    const apiKey = "cef6ae7836ecd17a2e06e0819975713e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

  if( weather.ready ) {
    return(
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input className="form-control mr-sm-2"
                 type="search"
                 placeholder="Search"
                 autoFocus="on"
                 onChange={handleCityChange} />
        </form>
        <WeatherInfo data={weather} />
        <Forecast city={weather.city}/>
      </div>
    );
  } else {
    return(
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input className="form-control mr-sm-2"
                 type="search"
                 placeholder="Search"
                 autoFocus="on"
                 onChange={handleCityChange} />
        </form>
      </div>
    );
  }
}

export default Weather;