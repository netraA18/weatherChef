import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieDetails from './components/FindRecipe';
import MovieList from './components/CityWeather';




function Home() {
  
  return (
    <div className="headerStyle">
      <h1 className="ui header">Weather Chef</h1>
      

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
          <Link to="/CityWeather" className="item">
            <strong>Your City's Weather</strong>
          </Link>
          <Link to="/FindRecipe" className="item">
          <strong>Find a Recipe</strong>
          </Link>
          <Link to="/WeatherRecipe" className="item">
          <strong>Weather Based Recipe</strong>
          </Link>
          
          <div className="right menu">
          <a className="ui item">
            <strong>Login</strong>
          </a>
          </div>
      </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MovieDetails" element={<MovieDetails />} />
          <Route path="/MovieList" element={<MovieList />} />
        </Routes>


      
    </Router>
  );
}

export default App;
