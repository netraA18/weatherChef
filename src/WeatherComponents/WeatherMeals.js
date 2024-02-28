import React, { useState } from 'react';
import { useEffect } from 'react';
import RecipeCard from '../FindRecipeComponents/RecipeCard';

import WeatherRecipe from '../components/WeatherRecipe';

const WeatherMeals = ({temperatureForMeal}) => {
    
    
    const [mealItem, setMealItem] = useState([]);
    // const allItemsSixty = ['Corba', 'Bistek','Blini Pancakes'];
    // const [allItemsSixty, setAllItemsSixty] = ([]);
    var allItemsSixty = [];
    const [itemName, setItemName] = useState('');

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    const fetchData = async () => {
        try {
          // allItems();
          const promises = allItemsSixty.map(async(itemName) => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`);
            
            const parsedData = await response.json();
            // console.log(getRandomInt(itemName.length));
            return parsedData.meals || [];  
          });
          const mealsData = await Promise.all(promises);
          
          // mealsData.forEach((element) => console.log(element.getRandomInt(element.length)));
          const map1 = mealsData.map((eachElement) => eachElement[getRandomInt(eachElement.length)]);
          console.log(map1);
          const mergedMeals = map1.flat();
         
          setMealItem(mergedMeals);

        } catch (error) {
          console.error("Error loading data: ", error);
        }
      };
      useEffect(() => {
        console.log("inside useEffect");
        if (temperatureForMeal > 50 && temperatureForMeal <= 70) {
          console.log("yes");
          allItemsSixty = ['grilled', 'salad', 'chicken', 'sushi'];
          
          fetchData();
        } else if (temperatureForMeal > 0 && temperatureForMeal < 20 ) {
          console.log(temperatureForMeal);
          console.log("inside else if");
          allItemsSixty = ['sushi'];
          
          fetchData();
        }
          
   
      }, [temperatureForMeal]);
      

      // console.log(temperatureForMeal);
      // if (temperatureForMeal >= 50) {
      //   console.log("yes");
      // } else {
      //   console.log("no");
      //   }
  return (
    <div>
      
      
     {mealItem.map((item, index) => (
            <RecipeCard key={item.idMeal} item={item} />
          ))} 
          
      


    </div>
  )
}

export default WeatherMeals;
