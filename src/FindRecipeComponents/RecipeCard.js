import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Grid from '@mui/material/Grid';

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
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className="card" sx={{ maxWidth: 300}}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={item.strMealThumb} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.strMeal}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {item.strCategory}
              <br />
              Area: {item.strArea}
              <br />
              Youtube Link: {item.strYoutube}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <FavoriteBorderIcon color='secondary' />
        </CardActions>
      </Card>
    </Grid>
  );
}

export default RecipeCard;

//         // <div className="foodItem" key={item.idMeal}>
//         //   <img id="foodImage" src={item.strMealThumb} alt="image" />
    
//         //   <strong>
//         //     {item.strMeal}
//         //   </strong>
//         //   <li> Youtube Link: {item.strYoutube} </li>
    
//         //   <ul>
//         //     <li>Category: {item.strCategory}</li>
//         //     <li>Instructions: {splitInstructions(item.strInstructions)} </li>
//         //     <li>Ingredients: {displayRecipeParts(item, { partName: 'Ingredient' })}</li>
//         //     <li>Measurements: {displayRecipeParts(item, { partName: 'Measure' })}</li>
//         //   </ul>
//         // </div>
//     );
// }

// export default RecipeCard;
