import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



const RecipeCard = ({ item }) => {
    
    const splitInstructions = (instructions) => {
        const sentences = instructions.split(".");
        const newArray = sentences.flat();
    
        return newArray.map((sentence, index) => (
          <p key={index}>{sentence}</p>
        ));
      };
      
    const displayRecipeParts = (item, { partName }) => {
        const partInfo = [];

        for (var i = 1; i <= 20; i++) {
        partInfo[i] = item[`str${partName}${i}`];
        }

        return partInfo.map((partText, index) => (
        <p key={index}>{partText}</p>
        ));
    };


    
    return (
        <div className="foodItem" key={item.idMeal}>
          <img id="foodImage" src={item.strMealThumb} alt="image" />
    
          <strong>
            {item.strMeal}
          </strong>
          <li> Youtube Link: {item.strYoutube} </li>
    
          <ul>
            <li>Category: {item.strCategory}</li>
            <li>Instructions: {splitInstructions(item.strInstructions)} </li>
            <li>Ingredients: {displayRecipeParts(item, { partName: 'Ingredient' })}</li>
            <li>Measurements: {displayRecipeParts(item, { partName: 'Measure' })}</li>
          </ul>
        </div>
    );
}

export default RecipeCard;
