import React from 'react';
import { useState, useEffect } from 'react';
import InputWeather from '../WeatherComponents/InputWeather';

const WeatherRecipe = () => {
  const [cityName, setCityName] = useState("Alpharetta");
  const [countryCode, setCountryCode] = useState("US");
  const [weatherInfo, setWeatherInfo] = useState({});
  const [weatherDescription, setWeatherDescription] = useState([]);
  const API_KEY = "feac66e300f95f0f9b2eab48b68c36c1";
  useEffect(() => {
    
    const fetchData = async () => {
      try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${API_KEY}`);
        const parsedData = await response.json();
        setWeatherInfo(parsedData.main || {});
        setWeatherDescription(parsedData.weather || []);
        
        
        

      } catch (error) {
        console.error("Error loading data: ", error);
      }
    }
    fetchData();
  
  }, [cityName, countryCode]);

  console.log(weatherInfo);
  return (
    
    <div>
      <InputWeather />
      <h1 style={{ textAlign: 'center' }}>Weather Based Recipe</h1>
      <p>Temp: {weatherInfo.temp} kelvins</p>
      <p>Temp_min: {weatherInfo.temp_min}</p>
      <p>Temp_max: {weatherInfo.temp_max}</p>

      {weatherDescription.map((weatherDetails) => (
        <div> 
          <p>Overall: {weatherDetails.main}</p>
          <p>Description: {weatherDetails.description}</p>
        </div>
      ))}
    </div>

    
   
      
  );
}

export default WeatherRecipe;
