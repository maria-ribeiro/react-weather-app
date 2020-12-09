import React from "react";
import "./Weather.css";

function Weather(){
  return(
    <div className="Weather">
      <form>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" />
      </form>
      <div className="row align-items-center outter-row">
        <div className="col-6 weather-main">
          <i class="far fa-snowflake"></i>
          <h2>
            22°C
          </h2>
          <p>Snow</p>
        </div>
        <div className="col-6 descriptive">
          <p>
            Lisbon, PT <br/>
            Wed, Dec 9 2020
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Maximum 23</li>
                <li>Humidity 63%</li>
                <li>Sunrise 08:02</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Minimum 15</li>
                <li>Wind 4km/h</li>
                <li>Sunset 18:21</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row forecast descriptive">
          Forecast
      </div>
    </div>
  );
}

export default Weather;