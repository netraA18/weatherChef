import React from 'react';
import { useState, useEffect } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InputWithIcon from '../FindRecipeComponents/InputWithIcon';

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

  const splitInstructions = (instructions) => {
    
    const sentences = [instructions.split(".")];
    const newArray = sentences.flat();

    return newArray.map((sentence, index) => (
      <p key={index}> {sentence}</p>
    ));
  };


  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Meal Information</h1>
      <MenuBookIcon id="menu-book-icon" />
      <InputWithIcon onFoodChange={setSelectedFood} />
      <div className='dataDisplay'>
        {items.map((item, index) => (
          <div className="foodItem" key={item.idMeal}>
            <strong>
              {index + 1} Meal Name: {item.strMeal}
            </strong>
            <ul>
              <li>Category: {item.strCategory}</li>
              
              <li>Instructions: {splitInstructions(item.strInstructions)} </li>
              
            </ul>



          </div>
        ))}
      </div>
    </div>
  );
};

export default FindRecipe;
