import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FindRecipe from './components/FindRecipe';
import WeatherRecipe from './components/WeatherRecipe';

import Instructions from './components/Instructions';
// import Contact from './components/Contact';





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
          
          <Link to="/WeatherRecipe" className="item">
          <strong>Weather Based Recipe</strong>
          </Link>
          <Link to="/FindRecipe" className="item">
          <strong>Find a Recipe</strong>
          </Link>
          {/* <Link to="/Contact" className="item">
          <strong>Contact</strong>
          </Link> */}
          {/* <Link to="/Instructions" className="item">
          <strong>Instructions</strong>
          </Link> */}
          
          
          <div className="right menu">
          <a className="ui item">
            <strong></strong>
          </a>
          </div>
      </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FindRecipe" element={<FindRecipe />} />
          <Route path="/WeatherRecipe" element={<WeatherRecipe />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
          <Route path="/instructions/:id" element={<Instructions />} />

          {/* <Route path="/Instructions" element={<Instructions />} /> */}
        </Routes>

        

      
    </Router>
  );
}

export default App;
