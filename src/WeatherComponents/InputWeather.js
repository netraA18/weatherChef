import React from 'react';
import { Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';

import Grid from '@mui/material/Grid';




    


const InputWeather = ( {updateCityName, updateCountryName} ) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleInputChange = (event) => {
    
    const { value } = event.target;
   
    setCity(value);
  }

  const handleCountryInputChange = (event) => {
    
    const { value } = event.target;
   
    setCountry(value);
  }

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
