import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { TfiShoppingCartFull } from 'react-icons/tfi'


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">

        <div class="container-fluid">


          <div className='navbar-brand-identity'>
            <Link to="/" className="navbar-icon" mt-4> <TfiShoppingCartFull /></Link>
            <Link to="/" className="navbar-brandname" > Next <span className="store-title"> Buy </span> </Link>
          </div>


          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link" >Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link" >Category</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link" >Sign Up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" >Sign In</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link" >Cart (0) </NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav >


    </>
  );
};

export default Header;