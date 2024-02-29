import React, { useState } from 'react';
import { useEffect } from 'react';
import RecipeCard from '../FindRecipeComponents/RecipeCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';

import WeatherRecipe from '../components/WeatherRecipe';

const WeatherMeals = ({temperatureForMeal}) => {
    
    
    const [mealItem, setMealItem] = useState([]);
   
    var allItemsPerWeather = [];
    // const [itemName, setItemName] = useState('');

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

   

    const fetchData = async () => {
        try {
          // allItems();
          const promises = allItemsPerWeather.map(async(itemName) => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`);
            
            const parsedData = await response.json();
            // console.log(getRandomInt(itemName.length));
            return parsedData.meals || [];  
          });
          const mealsData = await Promise.all(promises);
          
          // mealsData.forEach((element) => console.log(element.getRandomInt(element.length)));
          const map1 = mealsData.map((eachElement) => eachElement[getRandomInt(eachElement.length)]);
          const mergedMeals = map1.flat();
         
          setMealItem(mergedMeals);

        } catch (error) {
          console.error("Error loading data: ", error);
        }
      };

      useEffect(() => {

        

        
        
        if (temperatureForMeal > 55 && temperatureForMeal <= 70) { 
          allItemsPerWeather = ['grilled', 'salad', 'chicken', 'sushi'];
          fetchData();

        } else if (temperatureForMeal > 0 && temperatureForMeal <= 55) {      
          allItemsPerWeather= ['soup', 'Hot Chocolate', 'Casserole', 'Dal fry'];
          fetchData();

        } else if (temperatureForMeal > 70 && temperatureForMeal <= 90) {
          allItemsPerWeather = ['taco', 'sandwich', 'cheese', 'fruit'];
          fetchData();

        } else if (temperatureForMeal > 90) {
          allItemsPerWeather = ['yogurt', 'sandwich', 'sledz', 'strawberries'];
          fetchData();

        }
       
          
   
      }, [temperatureForMeal]);

      const handleRefresh = () => {
        fetchData();
      }
  
      

  return (
    <div>
      <Button variant="contained" id='custom-button' onClick={handleRefresh} >
        <RefreshIcon /> </Button>

        <div className='dataDisplay'>
        <Grid container rowSpacing={5} columnSpacing={2}>
        {mealItem.map((item, index) => (
            <RecipeCard key={item.idMeal} item={item} />
          ))} 
        </Grid>
      </div>
    
      


    </div>
  )
}

export default WeatherMeals;
