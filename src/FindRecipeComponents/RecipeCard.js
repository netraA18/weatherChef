import React from 'react';
import { useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import ReactCardFlip from 'react-card-flip';
import TableIngredients from './TableIngredients';
import { Link } from 'react-router-dom';

const RecipeCard = ({ item }) => {
  const [flip, setFlip] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleIngredientsClick = () => {
    if (showInstructions === true) {
      setShowInstructions(false);
    }
    setFlip(!flip);
    setShowIngredients(true);
  };

  const handleClickInstructions = () => {
    if (showIngredients === true) {
      setShowIngredients(false);
    }
    setFlip(!flip);
    setShowInstructions(true);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <ReactCardFlip isFlipped={flip}>
        {/* Front of the card */}
        <Card className='card' sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia component='img' height='200' image={item.strMealThumb} />
            <CardContent style={{ height: '155px' }}>
              <Typography gutterBottom variant='h5' component='div'>
                {item.strMeal}
              </Typography>
              <Typography variant='body1' color='text.primary'>
                <strong>Category:</strong> {item.strCategory}
                <br />
                <strong>Area:</strong> {item.strArea}
                <br />
                <strong>Link: </strong>
                <Link style={{ color: 'purple' }} to={item.strYoutube}>
                  {item.strMeal} Video{' '}
                </Link>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton variant='outlined' color='neutral' sx={{ mr: 'auto' }}>
              {/* Favorite button */}
            </IconButton>
            <div className='findRecipeButtons'>
              <Button
                style={{
                  backgroundColor: '#a8dadc',
                  color: '#03045e',
                  fontWeight: 'bold',
                  marginRight: '10px',
                }}
                variant='contained'
                size='small'
                onClick={() => handleIngredientsClick()}
              >
                Ingredients
              </Button>
              <Button
                style={{ backgroundColor: '#a8dadc', color: '#03045e', fontWeight: 'bold' }}
                size='small'
                variant='contained'
                onClick={() => handleClickInstructions()}
              >
                Instructions
              </Button>
            </div>
          </CardActions>
        </Card>

        {/* Back of the card */}
        <Card className='card' sx={{ maxWidth: 500 }}>
          <CardActionArea onClick={() => setFlip(!flip)}>
            <CardContent>
              <Typography gutterBottom variant='h7' component='div'></Typography>
              <Typography variant='body2' color='text.primary'>
                {showIngredients && <TableIngredients item={item} />}
                {showInstructions && (
                  <Link to={`/instructions/${item.idMeal}`}>Click here for detailed Instructions</Link>
                )}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>{/* Additional actions if needed */}</CardActions>
        </Card>
      </ReactCardFlip>
    </Grid>
  );
};

export default RecipeCard;

