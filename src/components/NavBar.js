import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/MovieDetails">Movie Details</Link>
        <Link to="/MovieList">Movie List</Link>
      
    </div>
  )
}

export default NavBar;
