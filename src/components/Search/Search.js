import {React,useState} from 'react'
import './Search.css'
import Weather from '../Weather/Weather';
const Search = () => {
    const [toggle, setToggle] = useState(false);
    const [city, setCity] = useState("");
    const handleClick = () => {
        setToggle(true);
      };
    
      const handleChange = (event) => {
        setCity(event.target.value);
      };
      console.log(city);
      console.log(toggle);
  return (
    <>
     {toggle ? (
        <Weather city={city} />
      ) : (
        <div>
        <h1 className="my-5 text-decoration-underline" style={{ textShadow: '1.5px 2px 4px white', textUnderlineOffset: '15px', textAlign: 'center' }}>Weather App</h1>
            <div className="card">
                <small className="text-muted" style={{ display: 'flex', justifyContent: 'center' }}>Live Weather</small>
                <div className="weather-form">
                <h3>World Weather Report</h3>
                <p>Uses openweathermap API and provides live weather report based on the city you provide.</p>
              
                    <div className="input">
                    <h4>City Name:</h4>
                    <input  type="text" placeholder="city name"  name="city" onChange={handleChange}/>
                    <button  className="btn btn-primary" onClick={handleClick}>Show</button>
                    </div>
                
                </div>
                <small className="text-muted" style={{ display: 'flex', justifyContent: 'center' }}>Designed by Anton Francis Jeejo</small>
            </div>
            </div>
   )}
    </>
  )
}

export default Search