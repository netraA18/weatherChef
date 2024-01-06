import React from 'react';
import { Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

const InputWithIcon = () => {
  return (
    <FormControl>
      <InputLabel htmlFor="inputFood" id="my-helper-text">Food Name</InputLabel>
      <Input id="inputFoodInput" aria-describedby='my-helper-text'/>  
    </FormControl>
  );
}

export default InputWithIcon;
