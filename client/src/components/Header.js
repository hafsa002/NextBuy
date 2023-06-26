import React from 'react';
import {NavLink} from 'react-router-dom';


const  Header = () => {
    return (
       <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <NavLink to = "/" className="navbar-brand" href="#">NextBuy</NavLink>
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink to = "/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink to = "/register" className="nav-link" href="#">Sign Up</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to = "/login" className="nav-link" href="#">Sign In</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to = "/cart" className="nav-link" href="#">Cart (0) </NavLink>
      </li>
    </ul>
   
  </div>
</nav>


       </>
    );
};

export default Header;