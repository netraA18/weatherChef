import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/FindRecipe">Find a Recipe</Link>
        <Link to="/WeatherRecipe">Weather Based Recipe</Link>
        <Link to="/SavedRecipes">Saved Recipes</Link>
      
    </div>
  )
}

export default NavBar;
