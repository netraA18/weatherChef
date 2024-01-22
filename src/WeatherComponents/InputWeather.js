import React from 'react';
import { Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';



const InputWeather = () => {
  return (
    <div className='input-container'>
      <FormControl>
        <InputLabel htmlFor="cityNameTitle" id="my-city-name">City Name</InputLabel>
        
        <Input id="cityName" name="cityItem" aria-describedby='my-city-name'/>
        <FormHelperText id="my-helper-text">Ex: Alpharetta - case doesn't matter</FormHelperText>
        <InputLabel htmlFor="countryNameTitle" id="my-country-name">Country Name</InputLabel>
        <Input id="countryName" name="countryItem" aria-describedby='my-city-name'/>
      </FormControl>
      <Stack spacing={2} direction="row">
        <Button variant="contained" style={{ backgroundColor: "rgb(210, 150, 110)", color: "maroon", fontWeight: "bold", marginLeft: '12px', marginBottom: '5px' }}>Submit</Button>
        <Button variant="contained" style={{ backgroundColor: "rgb(210, 150, 110)", color: "maroon", fontWeight: "bold", marginLeft: '12px', marginBottom: '5px' }}>Submit</Button>
      </Stack>
    </div>
  )
}

export default InputWeather;
