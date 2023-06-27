import React from 'react';
import {Link} from 'react-router-dom';

const  Footer = () => {
    return (
        <div className = "footer bg-dark text-light p-3">
            <h5 className='text-center'> All Right Reserved by &copy; Hafsa | 2023 </h5>
        
            <p className=' text-center mt-3'>

                <Link to = "/"> Home </Link> 
                |
                <Link to = "/about"> About </Link> 
                |
                <Link to = "/contact">  Contact </Link> 
                |
                <Link to = "/policy"> Policy </Link> 
            </p>
            </div>
       
    );
};

export default Footer;