import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";

function Weather(props){
  const [weather, setWeather] = useState({ready: false});
  const [forecast, setForecast] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("metric");

  function callback(childUnit) {
    setUnit(childUnit);
  }

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

  function handleForecastResponse(response) {
    setForecast({
      list: response.data.list,
      ready: true
    });
  }

  function search() {
    const apiKey = process.env.REACT_APP_API_KEY;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    let apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiForecastUrl).then(handleForecastResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

  if( weather.ready && forecast.ready ) {
    return(
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input className="form-control shadow-none mr-sm-2"
                 type="search"
                 placeholder="Search"
                 autoFocus="on"
                 onChange={handleCityChange} />
        </form>
        <WeatherInfo data={weather} unit={unit} parentCallback={callback} />
        <Forecast data={forecast.list} unit={unit} />
      </div>
    );
  } else {
    search();
    return(
      "Loading . . ."
    );
  }
}

export default Weather;