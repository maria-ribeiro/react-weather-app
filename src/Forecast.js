import React from "react";
import ForecastCard from "./ForecastCard";
import "./Forecast.css";

export default function Forecast(props){
  return(
    <div className="Forecast">
        { props.data.map( function(forecastItem) {
            return <ForecastCard key={forecastItem.dt} data={forecastItem} unit={props.unit} />
          })
        }
    </div>
  )
} 