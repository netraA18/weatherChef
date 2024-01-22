import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieDetails from './components/FindRecipe';
import MovieList from './components/SavedRecipes';
import SavedRecipes from './components/SavedRecipes';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FindRecipe from './components/FindRecipe';
import WeatherRecipe from './components/WeatherRecipe';
import InputWithIcon from './FindRecipeComponents/InputWithIcon';
import RecipeCard from './FindRecipeComponents/RecipeCard';
import Instructions from './components/Instructions';





function Home() {
  
  return (
    <div className="headerStyle">
      
      <h1 className="ui header">Weather Chef</h1>
      <LocalCafeIcon fontSize='large' />
      <AcUnitIcon fontSize='large'/>
      

    </div>

  );
}

function App() {
  return (
    <Router>
      <div className="ui pointing menu">
        
          <Link to="/" className="item">
          <strong>Home</strong>
          </Link>
          <Link to="/FindRecipe" className="item">
          <strong>Find a Recipe</strong>
          </Link>
          <Link to="/WeatherRecipe" className="item">
          <strong>Weather Based Recipe</strong>
          </Link>
          <Link to="/SavedRecipes" className="item">
          <strong>Saved Recipes</strong>
          </Link>
          <Link to="/Instructions" className="item">
          <strong>Instructions</strong>
          </Link>
          
          
          <div className="right menu">
          <a className="ui item">
            <strong>Login</strong>
          </a>
          </div>
      </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FindRecipe" element={<FindRecipe />} />
          <Route path="/WeatherRecipe" element={<WeatherRecipe />} />
          <Route path="/SavedRecipes" element={<SavedRecipes />} />
          <Route path="/instructions/:id" element={<Instructions />} />

          {/* <Route path="/Instructions" element={<Instructions />} /> */}
        </Routes>

        

      
    </Router>
  );
}

export default App;
