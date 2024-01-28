import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TableIngredients from '../FindRecipeComponents/TableIngredients';

const Instructions = () => {
  const { id } = useParams();
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    const fetchInstructions = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const parsedData = await response.json();

        
        if (parsedData.meals && parsedData.meals.length > 0) {
          setInstructions(parsedData.meals[0].strInstructions.split('.').filter(sentence => sentence.length > 0));
          
          
        } else {
          console.error("Invalid API response format");
        }
      } catch (error) {
        console.error("Error loading instructions: ", error);
      }
    };
    fetchInstructions();
  }, [id]);

  return (
    <div>
      {instructions.map((sentence, index) => (
        <ul>
          <><li style={{ color: 'white', fontSize: '15px'}} key={index}>{sentence}</li><br /></>
        </ul>
        
      ))}
      
    </div>
  );
};

export default Instructions;
