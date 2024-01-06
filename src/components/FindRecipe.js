import React from 'react';
import {useState, useEffect} from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InputWithIcon from '../FindRecipeComponents/InputWithIcon';

const FindRecipe = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //function will always return a promise - async
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=tacos");
        const parsedData = await response.json();
        setItems(parsedData.meals || []);
        

      } catch (error) {
        console.error("Error loading data: ", error);
      }

    }
    fetchData();
  }, []);



  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Meal Information</h1>
      <MenuBookIcon fontSize='large' id="menu-book-icon" />
      <InputWithIcon/>
      <div className="container">
        {items.map((item, index) => (
          <div className="foodItem" key={item.idMeal}>
                 <strong> 
                  {index + 1} Meal Name: {item.strMeal}</strong>
            
          </div>
        ))}
      </div>
    
      
    </div>
  );
};

export default FindRecipe;
