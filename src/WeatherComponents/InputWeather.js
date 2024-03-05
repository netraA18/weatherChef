import React from 'react';
import { Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
  
/**
 * InputWeather component renders a form to input city name and country abbreviation for weather data.
 * @param {Function} updateCityName - Function to update the city name state in the parent component
 * @param {Function} updateCountryName - Function to update the country abbreviation state in the parent component
 * @returns {JSX.Element} InputWeather component
 */
const InputWeather = ( {updateCityName, updateCountryName} ) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  /**
   * Handles input change for city name.
   * @param {Object} event - The input change event object
   */
  const handleInputChange = (event) => {
    const { value } = event.target;
    setCity(value);
  }

  /**
   * Handles input change for country abbreviation.
   * @param {Object} event - The input change event object
   */
  const handleCountryInputChange = (event) => {
    const { value } = event.target;
    setCountry(value);
  }

  /**
   * Handles form submission to update city and country states in the parent component.
   */
  const handleNameChange = () => {
    updateCountryName(country);
    updateCityName(city)
  }

  

  

  return (
    <div className='formContainer'>
    <form>
    <Grid container spacing={2} direction="column" alignItems="center" style={{ marginTop: "100px" }}>
      <Grid item>
        <FormControl>
          <InputLabel htmlFor="cityName" id="my-city-name">City Name</InputLabel>
          <Input id="cityName" name="cityItem" aria-describedby="my-city-name" onChange={handleInputChange} />
          <FormHelperText id="my-helper-text">Ex: Alpharetta - case doesn't matter</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <InputLabel htmlFor="countryName" id="my-country-name">Country Abbreviation</InputLabel>
          <Input id="countryName" name="countryItem" aria-describedby="my-country-name" onChange={handleCountryInputChange} />
          <FormHelperText id="my-helper-text">Ex: US, IN, GR - case doesn't matter</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item>
        <Button onClick={handleNameChange} variant="contained" style={{ backgroundColor: "rgb(210, 150, 110)", color: "maroon", fontWeight: "bold" }}>Submit</Button>
      </Grid>
    </Grid>
  </form>
  </div>

    // <div className='inputContainer'>
    //   <FormControl>
    //     <InputLabel htmlFor="cityNameTitle" id="my-city-name">City Name</InputLabel>
        
    //     <Input id="cityName" name="cityItem" aria-describedby='my-city-name' onChange={handleInputChange}/>
    //     <FormHelperText id="my-helper-text">Ex: Alpharetta - case doesn't matter</FormHelperText>
       
    //   </FormControl>
    

    //   <FormControl>
    //     <InputLabel htmlFor="cityNameTitle" id="my-country-name">Country Abbreivation</InputLabel>
        
    //     <Input id="countryName" name="countryItem" aria-describedby='my-country-name' onChange={handleCountryInputChange}/>
    //     <FormHelperText id="my-helper-text">Ex: US, IN, GR - case doesn't matter</FormHelperText>
       
    //   </FormControl>
    //   <Stack spacing={2} direction="row">
    //     <Button onClick={handleNameChange} variant="contained" style={{ backgroundColor: "rgb(210, 150, 110)", color: "maroon", fontWeight: "bold", marginLeft: '12px', marginBottom: '5px' }}>Submit</Button>
       
    //   </Stack>
    // </div>
  );
}

export default InputWeather;
