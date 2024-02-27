import React, { useState } from 'react';
import { useEffect } from 'react';
import RecipeCard from '../FindRecipeComponents/RecipeCard';

import WeatherRecipe from '../components/WeatherRecipe';

const WeatherMeals = ({temperatureForMeal}) => {
    const [itemOne, setItemOne] = useState("Corba");
    const [itemTwo, setItemTwo] = useState("");
    const [itemThree, setItemThree] = useState("");
    const [itemFour, setItemFour] = useState("");

    const fetchData = async () => {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemOne}`);
          const parsedData = await response.json();
          setItemOne(parsedData.meals || []);
        } catch (error) {
          console.error("Error loading data: ", error);
        }
      };
      useEffect(() => {
        fetchData();
      }, [itemOne]);



    // if (temperatureForMeal >= 60) {
    //     console.log("yes, above 60");
    // } else {
    //     console.log("no, not above 60");

    // }
 
  return (
    <div>
      {/* {itemOne.map((item, index) => (
            <RecipeCard key={item.idMeal} item={item} />
          ))} */}


    </div>
  )
}

export default WeatherMeals;
