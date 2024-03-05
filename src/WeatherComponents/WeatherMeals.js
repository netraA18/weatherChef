import React, { useState } from 'react';
import { useEffect } from 'react';
import RecipeCard from '../FindRecipeComponents/RecipeCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';

/**
 * WeatherMeals component displays meal recommendations based on temperature.
 * @param {number} temperatureForMeal - Temperature for meal recommendations
 * @returns {JSX.Element} WeatherMeals component
 */
const WeatherMeals = ({temperatureForMeal}) => {
    
    
    const [mealItem, setMealItem] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false);
   
    var allItemsPerWeather = [];


    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }


    const handleRefreshButton = () => {
        setButtonClicked(!buttonClicked);
       
    }
   
    // Function to fetch meal data based on temperature category
    const fetchData = async () => {
        try {
          const promises = allItemsPerWeather.map(async(itemName) => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`);     
            const parsedData = await response.json();
            return parsedData.meals || [];  
          });

          const mealsData = await Promise.all(promises);
          const map1 = mealsData.map((eachElement) => eachElement[getRandomInt(eachElement.length)]);
          const mergedMeals = map1.flat();
         
          setMealItem(mergedMeals);

        } catch (error) {
          console.error("Error loading data: ", error);
        }
      };

      // Effect to fetch meal data when temperature or buttonClicked state changes
      useEffect(() => {

        console.log("Inside useEffect");
    
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

      }, [temperatureForMeal, buttonClicked]);

      
  
      

  return (
    <div>
       <Button variant="contained" id="custom-button" onClick={handleRefreshButton}>
        <RefreshIcon />
        </Button>
        <div className='dataDisplay' style={{ marginTop: '40px' }}>
          <Grid container rowSpacing={5} columnSpacing={2}>
            {mealItem.map((item, index) => (
            <RecipeCard key={item.idMeal} item={item} displayAsColumn={true} />
            ))}
            </Grid>
            </div>
          </div>
  )
}

export default WeatherMeals;
