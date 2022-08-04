import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function Form() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `3d0b4f1fed2da565fc23a9bf4c0d1378`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }
  function displayWeather(response) {
    setWeather(
      <ul>
        <li>Temperature is: {Math.round(response.data.main.temp)} C</li>
        <li>Humidity is: {response.data.main.humidity} %</li>
        <li>Wind speed is: {Math.round(response.data.wind.speed)} m/s</li>
        <li>{response.data.weather[0].description}</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
        </li>
      </ul>
    );
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} placeholder="Type a city" />
        <input type="submit" value="search" />
      </form>
      <div>{weather}</div>
    </div>
  );
}
export default Form;
