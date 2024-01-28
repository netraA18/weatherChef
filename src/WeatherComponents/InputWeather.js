import React from 'react';
import { Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';


    


const InputWeather = ( {updateCityName} ) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleInputChange = (event) => {
    
    const { value } = event.target;
   
    setCity(value);
  }

  const handleCityChange = () => {
    updateCityName(city);
  }

  

  return (
    
    <div className='inputContainer'>
      <FormControl>
        <InputLabel htmlFor="cityNameTitle" id="my-city-name">City Name</InputLabel>
        
        <Input id="cityName" name="cityItem" aria-describedby='my-city-name' onChange={handleInputChange}/>
        <FormHelperText id="my-helper-text">Ex: Alpharetta - case doesn't matter</FormHelperText>
       
      </FormControl>
      <Stack spacing={2} direction="row">
        <Button onClick={handleCityChange} variant="contained" style={{ backgroundColor: "rgb(210, 150, 110)", color: "maroon", fontWeight: "bold", marginLeft: '12px', marginBottom: '5px' }}>Submit</Button>
       
      </Stack>
    </div>
  )
}

export default InputWeather;
