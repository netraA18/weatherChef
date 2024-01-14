import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Tab } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import TableIngredients from './TableIngredients';
import Button from '@mui/material/Button';


const RecipeCard = ({ item }) => {

    const [flip, setFlip] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);

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

    const handleIngredientsClick = () => {
      if (showInstructions === true) {
        setShowInstructions(false);
      }
      setFlip(!flip);
      setShowIngredients(true);

    }

    const handleInstructionsClick = () => {
      
      if (showIngredients === true) {
        setShowIngredients(false);
      }
      setFlip(!flip);
      setShowInstructions(true);
    }



    return (
       
        <Grid item xs={12} sm={6} md={4} lg={3}>   
          <ReactCardFlip isFlipped={flip}>
            {/* Front of the card */}
            <Card className="card" sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia component="img" height="200" image={item.strMealThumb} />
                <CardContent style={{ height: '150px' }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.strMeal}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    <strong>Category:</strong> {item.strCategory}
                    <br />
                    <strong>Area:</strong> {item.strArea}
                    <br />
                    <strong>Video Link:</strong> {item.strYoutube}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton variant="outlined" color="neutral" sx={{ mr: 'auto' }}>
                  <FavoriteBorderIcon style={{ color: 'red' }} />
                </IconButton>
                <Button size="small" onClick={() => handleIngredientsClick()} >Ingredients</Button>
                <Button size="small" onClick={() => handleInstructionsClick()}>Instructions</Button>
              </CardActions>
            </Card>
      
            {/* Back of the card */}
            <Card className="card" sx={{ maxWidth: 500}}>  
              <CardActionArea onClick={() => setFlip(!flip)}>
                <CardContent >
                  <Typography gutterBottom variant="h7" component="div">
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                      {showIngredients && <TableIngredients item={item} />}
                      {showInstructions && splitInstructions(item.strInstructions)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions> 
                
              </CardActions>
            </Card>
          </ReactCardFlip>
        </Grid>
        
      );      
}

export default RecipeCard;

// //         // <div className="foodItem" key={item.idMeal}>
// //         //   <img id="foodImage" src={item.strMealThumb} alt="image" />
    
// //         //   <strong>
// //         //     {item.strMeal}
// //         //   </strong>
// //         //   <li> Youtube Link: {item.strYoutube} </li>
    
// //         //   <ul>
// //         //     <li>Category: {item.strCategory}</li>
// //         //     <li>Instructions: {splitInstructions(item.strInstructions)} </li>
// //         //     <li>Ingredients: {displayRecipeParts(item, { partName: 'Ingredient' })}</li>
// //         //     <li>Measurements: {displayRecipeParts(item, { partName: 'Measure' })}</li>
// //         //   </ul>
// //         // </div>
// //     );
// // }

// // export default RecipeCard;


