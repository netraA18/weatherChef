import React from 'react';
import { useState, useEffect } from 'react';
import InputWeather from '../WeatherComponents/InputWeather';
import WeatherImages from '../WeatherComponents/WeatherImages';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import WeatherMeals from '../WeatherComponents/WeatherMeals';


/**
 * WeatherRecipe component displays weather information based on user-selected city and country.
 * @returns {JSX.Element} WeatherRecipe component
 */
const WeatherRecipe = () => {
  // State variables to manage user-selected city, country, and weather data
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [fahrenTemp, setFahrenTemp] = useState(0.0);
  
  const [weatherInfo, setWeatherInfo] = useState({});
  const [weatherDescription, setWeatherDescription] = useState([]);
  const API_KEY = "feac66e300f95f0f9b2eab48b68c36c1";

  

  const KelvinsToFahrenheit = ({temperature}) => {
    var fahrenTempConversion = (temperature - 273.15) * 1.8 + 32;
    setFahrenTemp(fahrenTempConversion);
    
    return  (  
      <p>{fahrenTemp.toFixed(2)}°F</p>
    );
 
  }
   /**
   * Fetches weather data based on selected city and country.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},${selectedCountry}&appid=${API_KEY}`);
        const parsedData = await response.json();
         // Update weather information states
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
    <div className="weatherForInput">
      <InputWeather updateCountryName={setSelectedCountry} updateCityName={setSelectedCity} />
    </div>
    <div>
      <h1 id="weatherTitle"> Weather Based Recipe!</h1>
     
    </div>
   
    <div className='boxing'>
      <Box id="box"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          marginTop: '-200px', 
          marginBottom: '50px',
          marginLeft: '150px',
          '& > :not(style)': {
          m: 1,
          width: 350,
          height: 350,
          
          },
        }}
      >
        <Paper
          id="paperID"
          elevation={0}
          sx={{
            backgroundColor: 'rgb(0, 0, 35)',
            padding: '10px',
    
          }}
        >
          <div className='temperatureInfo'>
            <strong>Temperature: </strong>
            <span style={{ color: '#008CFF', fontWeight: 'bold' }}>
              <KelvinsToFahrenheit temperature={weatherInfo.temp} />
            </span>
            <br />
            <strong>Min Temperature: </strong>
            <span style={{ color: '#008CFF', fontWeight: 'bold' }}>
              <KelvinsToFahrenheit temperature={weatherInfo.temp_min} />
            </span>
            <br />
            <strong>Max Temperature: </strong>
            <span style={{ color: '#008CFF', fontWeight: 'bold' }}>
              <KelvinsToFahrenheit temperature={weatherInfo.temp_max} />
            </span>
            <br />
            {weatherDescription.map((weatherDetails) => (
              <div key={weatherDetails.id}>
                <WeatherImages iconOverall={weatherDetails.main} />
                <strong>Overall: </strong>
                <span style={{ color: '#008CFF', fontWeight: 'bold' }}>
                  {weatherDetails.main}
                </span>
                <br /> <br />
                <strong>Description: </strong>
                <span style={{ color: '#008CFF', fontWeight: 'bold' }}>
                  {weatherDetails.description}
                </span>
              </div>
            ))}
          </div>
        </Paper>
      </Box>
    </div>
    
    <div>
      <WeatherMeals temperatureForMeal={fahrenTemp} />
    </div>
  </div>
      
  );
}

export default WeatherRecipe;
