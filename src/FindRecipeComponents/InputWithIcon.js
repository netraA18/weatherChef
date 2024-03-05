import React from 'react';
import { Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';


/**
 * Functional componennt representing an input field with an icon
 * @param {Function} onFoodChange - Callback function triggered on food change 
 * @returns {JSX.Element} InputWithIcon component
 */
const InputWithIcon = ({ onFoodChange }) => {
  
  const [food, setFood] = useState("");
  

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFood(value);
  }

  const handleFoodChange = () => {
    onFoodChange(food);
    
  };


  return (
    <div className='input-container'>
      <FormControl>
        <InputLabel htmlFor="inputFoodTitle" id="my-title-food">Food Name</InputLabel>
        <Input id="inputFood" name="foodItem" aria-describedby='my-title-food' onChange={handleInputChange} />
        <FormHelperText id="my-helper-text">Below are sample recipes. Search for your own! You can search for words such as rice, chocolate, soup, etc.</FormHelperText>
      </FormControl>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleFoodChange} style={{ backgroundColor: "rgb(210, 150, 110)", color: "maroon", fontWeight: "bold", marginLeft: '12px', marginBottom: '5px' }}>Submit</Button>
      </Stack>
    </div>
  );
}

export default InputWithIcon;
