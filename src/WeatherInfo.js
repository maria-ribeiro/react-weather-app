import React from "react";
import FormattedDate from "./FormattedDate"
import InfoCard from "./InfoCard";

export default function WeatherInfo(props){
  return(
    <div className="WeatherInfo">
      <div className="row align-items-center outter-row">
        <div className="col-6 weather-main">
          <i className="far fa-snowflake"></i>
          <h1>
            <strong>
            {props.data.temperature}
            <span className="unit">°C | °F</span>
            </strong>
          </h1>
          <p className="text-capitalize">{props.data.description}</p>
        </div>
        <div className="col-6 description light-background">
          <h3>{props.data.city}, {props.data.country}</h3>
          <FormattedDate date={props.data.date}/>
          <div className="row justify-content-around">
            <div className="col col-lg-3">
              <InfoCard value={props.data.maximum} unit="°C" name="maximum"/>
              <InfoCard value={props.data.minimum} unit="°C" name="minimum"/>
            </div>
            <div className="col col-lg-3">
              <InfoCard value={Math.round(props.data.wind * 3.6)} unit="km/h" name="wind speed"/>
              <InfoCard value={props.data.humidity} unit="%" name="humidity"/>      
            </div>
            <div className="col col-lg-3">
              <InfoCard value={("0" + props.data.sunrise.getHours()).substr(-2)+":"+("0" + props.data.sunrise.getMinutes()).substr(-2)}
                        name="sunrise"/>
              <InfoCard value={("0" + props.data.sunset.getHours()).substr(-2)+":"+("0" + props.data.sunset.getMinutes()).substr(-2)}
                        name="sunset"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
