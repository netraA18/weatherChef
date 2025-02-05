import React from 'react';
import { useState, useEffect } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InputWithIcon from '../FindRecipeComponents/InputWithIcon';
import RecipeCard from '../FindRecipeComponents/RecipeCard';
import Grid from '@mui/material/Grid';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

/**
 * Component for finding recipes based on user input
 * @returns JSX.Element
 */
const FindRecipe = () => {
  // State variables for managing selected food, recipe items, and loading status
  const [selectedFood, setSelectedFood] = useState('');
  const [items, setItems] = useState([]);
 
  const [loading, setLoading] = useState(true); //State to track loading status
  
  const fetchData = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedFood}`);
      const parsedData = await response.json();
      setItems(parsedData.meals || []);
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
   
  }, [selectedFood, fetchData]);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Find a Recipe!
        <div className='iconsFindRecipe'>
          <LunchDiningIcon fontSize='medium' />
          <RestaurantIcon fontSize='medium' />
        </div>
      </h1>
      <MenuBookIcon id='menu-book-icon' />
      <InputWithIcon onFoodChange={setSelectedFood} />
      <div className='dataDisplay'>
        <Grid container rowSpacing={5} columnSpacing={2}>
          {!loading && items.length === 0 ? (
            <div style={{fontSize: '20px'}}>No recipes found. Search something else!</div>
          ) : (
            items.map((item) => (
              <RecipeCard key={item.idMeal} item={item} />
            ))

          )}
          
        </Grid>
      </div>
    </div>
  );
};

export default FindRecipe;


//commnet