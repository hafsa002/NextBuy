import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import{TfiShoppingCartFull} from 'react-icons/tfi'


const  Header = () => {
    return (
       <>
<nav className="navbar navbar-expand-lg">

  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <div className='navbar-brand-identity'>
    <Link to = "/" className="navbar-icon" mt-4><TfiShoppingCartFull/></Link>
    <Link to = "/" className="navbar-brandname" > Next <span className="store-title"> Buy </span> </Link>
    
    </div>
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0"> 
<li className="nav-item active">
        <NavLink to = "/" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink to = "/category" className="nav-link" >Category</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to = "/register" className="nav-link" >Sign Up</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to = "/login" className="nav-link" >Sign In</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to = "/cart" className="nav-link" >Cart (0) </NavLink>
      </li>
    </ul>
   
  </div>
</nav>


       </>
    );
};

export default Header;