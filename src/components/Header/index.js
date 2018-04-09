import React from 'react';
import { Link }from 'react-router-dom';

const Header = () => (
  
  < div className = "header" >
    <div className="hcontainer" >
    
      <h1 className="logo " > 
        <Link to="/">
          Sites By Andrew
        </Link>
      </h1>
      <div className="navLink" >
        <Link  to="/main">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link  to="/gallery/">Gallery</Link>
      </div>
    </div>
  </div>
)

export default Header
