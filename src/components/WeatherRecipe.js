import React from 'react';
import { useState, useEffect } from 'react';
import InputWeather from '../WeatherComponents/InputWeather';

const WeatherRecipe = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  
  const [weatherInfo, setWeatherInfo] = useState({});
  const [weatherDescription, setWeatherDescription] = useState([]);
  const API_KEY = "feac66e300f95f0f9b2eab48b68c36c1";
  
  const KelvinsToFahrenheit = ({temperature}) => {
    var fahrenTemp = (temperature - 273.15) * 1.8 + 32;
    
    
    
    return  (
      <p>{fahrenTemp.toFixed(2)}°F</p>
    );
    
  }
  useEffect(() => {
    
    const fetchData = async () => {
      try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},${selectedCountry}&appid=${API_KEY}`);
        const parsedData = await response.json();
        setWeatherInfo(parsedData.main || {});
        setWeatherDescription(parsedData.weather || []);
        
        
        

      } catch (error) {
        console.error("Error loading data: ", error);
      }
    }
    fetchData();
  
  }, [selectedCity, selectedCountry]);

  
  return (
    
    <div>
      <InputWeather updateCountryName = {setSelectedCountry} updateCityName = {setSelectedCity} />

      <h1 id="weatherTitle"> Weather Based Recipe</h1>
      
      <div className='temperatureInformation'>
      <p>Temperature: <KelvinsToFahrenheit temperature = {weatherInfo.temp} /></p>
      <p>Minimum Temperature: <KelvinsToFahrenheit temperature = {weatherInfo.temp_min} /></p>
      <p>Maxiumum Temperature: <KelvinsToFahrenheit temperature = {weatherInfo.temp_max} /></p>

      </div>
     
      
      
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
