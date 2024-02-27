import React, { useState } from 'react';
import { useEffect } from 'react';
import RecipeCard from '../FindRecipeComponents/RecipeCard';

import WeatherRecipe from '../components/WeatherRecipe';

const WeatherMeals = ({temperatureForMeal}) => {
    
    const [mealItem, setMealItem] = useState([]);
    const allItemsSixty = ['Corba', 'Bistek','Blini Pancakes'];
    const [itemName, setItemName] = useState('');

 
    const fetchData = async () => {
        try {
          // allItems();
          const promises = allItemsSixty.map(async(itemName) => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`);
            const parsedData = await response.json();
            return parsedData.meals || [];  
          });
          const mealsData = await Promise.all(promises);
          const mergedMeals = mealsData.flat();
          setMealItem(mergedMeals);

        } catch (error) {
          console.error("Error loading data: ", error);
        }
      };
      useEffect(() => {
        
        
        
        fetchData();
        
        // fetchData();
      }, []);
      
   
  return (
    <div>
      
      
     {mealItem.map((item, index) => (
            <RecipeCard key={item.idMeal} item={item} />
          ))} 
          
      


    </div>
  )
}

export default WeatherMeals;
