import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
import InfoCard from "./InfoCard";

export default function WeatherInfo(props){
  let degree, maximum, minimum;
  if (props.unit === "metric") {
    degree = "°C";
    maximum = props.data.maximum;
    minimum = props.data.minimum;
  } else {
    degree = "°F";
    maximum = Math.round(props.data.maximum * (9/5) + 32);
    minimum = Math.round(props.data.minimum * (9/5) + 32);
  }
  return(
    <div className="WeatherInfo">
      <div className="row align-items-center outter-row">
        <div className="col-6 weather-main">
          <WeatherIcon id={props.data.icon} size={120} />
          <WeatherTemperature temp={props.data.temperature} parentCallback={props.parentCallback} unit={props.unit} />
          <p className="text-capitalize">{props.data.description}</p>
        </div>
        <div className="col-6 description light-background">
          <h3>{props.data.city}, {props.data.country}</h3>
          <FormattedDate date={props.data.date}/>

          <div className="row justify-content-around">
            <div className="col col-lg-3">
              <InfoCard value={maximum} unit={degree} name="maximum"/>
            </div>
            <div className="col col-lg-3">
              <InfoCard value={Math.round(props.data.wind * 3.6)} unit="km/h" name="wind"/>
            </div>
            <div className="col col-lg-3">
              <InfoCard value={("0" + props.data.sunrise.getHours()).substr(-2)+":"+("0" + props.data.sunrise.getMinutes()).substr(-2)}
                        name="sunrise"/>
            </div>
            <div className="w-100"></div>
            <div className="col col-lg-3">
              <InfoCard value={minimum} unit={degree} name="minimum"/>
            </div>
            <div className="col col-lg-3">
              <InfoCard value={props.data.humidity} unit="%" name="humidity"/>      
            </div>
            <div className="col col-lg-3">
              <InfoCard value={("0" + props.data.sunset.getHours()).substr(-2)+":"+("0" + props.data.sunset.getMinutes()).substr(-2)}
                        name="sunset"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
