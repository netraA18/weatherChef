import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InputWithIcon from '../FindRecipeComponents/InputWithIcon';
import RecipeCard from '../FindRecipeComponents/RecipeCard';
import Grid from '@mui/material/Grid';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import Instructions from './Instructions';

const FindRecipe = () => {
  const [selectedFood, setSelectedFood] = useState('');
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedFood}`);
      const parsedData = await response.json();
      setItems(parsedData.meals || []);
    } catch (error) {
      console.error("Error loading data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedFood]);

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
          {items.map((item, index) => (
            <RecipeCard key={item.idMeal} item={item} />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default FindRecipe;


