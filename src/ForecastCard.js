import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastCard(props){
  let date = new Date(props.data.dt * 1000);
  return(
    <div className="ForecastCard light-background">
      {date.getDate()}/{date.getMonth()+1}<br/>
      {date.getHours()}:00 <br/>
      <WeatherIcon id={props.data.weather[0].icon} /> <br/>
      {Math.round(props.data.main.temp)}°C
    </div>
  )
}