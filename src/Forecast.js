import React, { useState } from "react";
import axios from "axios";
import ForecastCard from "./ForecastCard";
import "./Forecast.css";

export default function Forecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data.list);
    setLoaded(true);
  }

  if (loaded) {
    return(
      <div className="Forecast">
          { forecast.map( function(forecastItem) {
              return <ForecastCard data={forecastItem} />
            })
          }
      </div>
    )
  } else {
    const apiKey = "cef6ae7836ecd17a2e06e0819975713e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleForecastResponse);
    return "Loading";
  }
} 