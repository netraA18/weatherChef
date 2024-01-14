import React from 'react';
import { Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

//onFoodChange is passed from parent component to child component to allow update the state
const InputWithIcon = ({ onFoodChange }) => {
  
  const [food, setFood] = useState("");
  

  const handleInputChange = (event) => {
    //extract value property
    const { value } = event.target;
    //food value is being updated
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
      </FormControl>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleFoodChange} style={{ backgroundColor: "rgb(210, 150, 110)", color: "maroon", fontWeight: "bold", marginLeft: '12px', marginTop: '18px' }}>Submit</Button>
      </Stack>
    </div>
  );
}

export default InputWithIcon;
