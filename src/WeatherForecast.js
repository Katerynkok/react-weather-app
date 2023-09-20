import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "5t377bdod73f4cbfd4df58abbb0a0579";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>

          <div className="clearfix">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="overcast clouds"
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
