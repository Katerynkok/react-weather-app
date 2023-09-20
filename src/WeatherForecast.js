import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>

          <div className="clearfix">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="broken-clouds-day"
              size={36}
            ></img>
          </div>

          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperaure-max">19°</span>
            <span className="WeatherForecast-temperaure-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
