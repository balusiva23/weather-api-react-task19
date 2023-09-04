import React, { useState, useEffect } from "react";
import "./Weather.css";
import { Link } from 'react-router-dom';
const Weather = ({ city }) => {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5fcb0017515c5ce56a59facaf1f66cf2`;

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(baseURL)
        .then((res) => {
          if (!res.ok) {
            throw Error(`could not fetch the data for that resource`);
          }
          console.log(data);
          return res.json();
        })
        .then((data) => setData(data))
        .catch((err) => setError(err.message));
    }, []);
  
    
  const handleResetState = () => {
    setData(null);
  };

  return (
    <>
    {error ? (
    <p class="error-message"></p>
    ) : (
        data && (
       <div className="card">
      <div className="weather-card">
        <h1>
          The Weather is Currently  {data.weather[0].description}
        </h1>
        <h6 className="fw-lighter">
          The temperature in {data.name} is {data.main.temp} &deg;C
        </h6>
        <div className="weather-data">
        {/* <p>
                weather icon is {data.weather[0].icon}, The temperature in{" "}
                {data.name} {data.main.temp}degC
              </p> */}
          <p>Weather Icon: {data.weather[0].icon}</p>
          <p>Temperature: {data.main.temp} °C</p>
          <p>Temp Min: {data.main.temp_min} °C</p>
          <p>Temp Max: {data.main.temp_max} °C</p>
          <p>Weather Description: {data.weather[0].description}</p>
          <p>Wind Speed: {data.wind.speed} m/s</p>
          <p>Humidity: {data.main.humidity}%</p>

          {/* <a onClick={handleResetState} className="btn btn-primary">Back to Home</a> */}
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <small className="text-muted" style={{ display: 'flex', justifyContent: 'center' }}>Designed by Anton Francis Jeejo</small>
        </div>
      </div>
    </div>
        )
    )}
    </>
  )
}

export default Weather