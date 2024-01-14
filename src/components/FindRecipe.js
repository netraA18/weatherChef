import React from 'react';
import { useState, useEffect } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InputWithIcon from '../FindRecipeComponents/InputWithIcon';
import RecipeCard from '../FindRecipeComponents/RecipeCard';
import Grid from '@mui/material/Grid';


const FindRecipe = () => {

  const [selectedFood, setSelectedFood] = useState(null);
  const [items, setItems] = useState([]);
  
  
  

  useEffect(() => {
    //function will always return a promise - async
    const fetchData = async () => {
      try {
       
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedFood}`);
        const parsedData = await response.json();
        setItems(parsedData.meals || []);

      } catch (error) {
        console.error("Error loading data: ", error);
      }
    }
    fetchData();
    //when user inputs a new food, useEffect callback is triggered and fetchData is called
  }, [selectedFood]);


  
  

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Meal Information</h1>
      <MenuBookIcon id="menu-book-icon" />
      <InputWithIcon onFoodChange={setSelectedFood} />
      
      <div className='dataDisplay'>
        <Grid container rowSpacing={2} columnSpacing={2}>
        {items.map((item, index) => (
          <RecipeCard key={item.idMeal} item={item} />
        ))}

        </Grid>
        
      </div>
    </div>
  );

};

export default FindRecipe;
