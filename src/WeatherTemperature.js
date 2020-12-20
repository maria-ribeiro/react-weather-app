import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");
  function showFarenheit(event){
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event){
    event.preventDefault();
    setUnit("metric");
  }

  function fahrenheit() {
    return Math.round(props.temp * (9/5) + 32);
  }

  if (unit === "metric") {
    return(
      <div className="WeatherTemperature">
        <h1>
          <strong>
            {props.temp}
            <span className="unit">
              °C | <a href="/" onClick={showFarenheit}>°F</a>
            </span>
          </strong>
        </h1>
      </div>
    );
  } else {
    
    return(
      <div className="WeatherTemperature">
        <h1>
          <strong>
            {fahrenheit()}
            <span className="unit">
              <a href="/" onClick={showCelsius}>°C</a> | °F
            </span>
          </strong>
        </h1>
      </div>
    );
  }
}