import React from 'react';
import icon02d from './02d@2x.png';
import icon09d from './094@2x.png';
import icon11d from './11d@2x.jpeg';
import icon13d from './13d@2x.jpeg';
import icon50d from './50d@3x.png';
import icon01d from './ClearSky.png';

/**
 * WeatherImages component displays weather icons based on the overall weather condition.
 * @param {string} iconOverall - Overall weather condition
 * @returns {JSX.Element} WeatherImages component
 */
const WeatherImages = ({iconOverall}) => {  
    const weatherIcons = {
        "Clear": { day: icon01d},
        "Clouds": { day: icon02d},
        "Rain": { day: icon09d},
        "Drizzle": { day: icon09d},
        "Thunderstorm": { day: icon11d},
        "Snow": { day: icon13d},
        "Mist": {day: icon50d},
        "Smoke": {day: icon50d},
        "Fog": {day: icon50d},
        "Haze": {day: icon50d},
        "Dust": {day: icon50d}
      };
      const iconFileName = weatherIcons[iconOverall].day;
      

  return (
    <div> 
        {iconFileName && <img id = "imageIcon" src={iconFileName} alt="icon" />}
        
    </div>
  )
}

export default WeatherImages;
