import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';

function Home() {
  return <h1 className="ui header">Movie Database</h1>;
}

function App() {
  return (
    <Router>
      <div className="ui pointing menu">
        
          <Link to="/" className="item">
          <strong>Home</strong>
          </Link>
          <Link to="/MovieList" className="item">
            <strong>Movie List</strong>
          </Link>
          <Link to="/MovieDetails" className="item">
          <strong>Movie Details</strong>
          </Link>
          <div className="movieQuest">
            <h1>Movie Quest</h1>
            </div> 
          <div className="right menu">
          <a class="ui item">
            Logout
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
