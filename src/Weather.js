import React from "react";
import "./Weather.css";

function Weather(){
  return(
    <div className="Weather">
      <form>
        <input class="form-control mr-sm-2"
               type="search"
               placeholder="Search"
               autoFocus="on" />
      </form>
      <div className="row align-items-center outter-row">
        <div className="col-6 weather-main">
          <i class="far fa-snowflake"></i>
          <h1>
            <strong>
            22
            <span className="unit">°C | °F</span>
            </strong>
          </h1>
          <p>Snow</p>
        </div>
        <div className="col-6 description light-background">  
          <h3>Lisbon, PT</h3>
          <p>
            Wed, Dec 9 2020, 14:32
          </p>
          <div className="row justify-content-around">
            <div className="col col-lg-3">
              <div className="weather-card">
                <h3>
                  <strong>23
                  <span className="unit">°C</span></strong>
                </h3>
                <p>maximum</p>
              </div>
              <div className="weather-card bottom">
                <h3>
                  <strong>12
                  <span className="unit">°C</span></strong>
                </h3>
                <p>minimum</p>
              </div>
            </div>
            <div className="col col-lg-3">
              <div className="weather-card">
                <h3>
                  <strong>4
                  <span className="unit">km/h</span></strong>
                </h3>
                <p>wind speed</p>
              </div>
              <div className="weather-card bottom">
                <h3>
                  <strong>33
                  <span className="unit">%</span></strong>
                </h3>
                <p>humidity</p>
              </div>
            </div>
            <div className="col col-lg-3">
              <div className="weather-card">
                <h3><strong>08:33</strong></h3>
                <p>sunrise</p>
              </div>
              <div className="weather-card bottom">
                <h3><strong>18:47</strong></h3>
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
}

export default Weather;