import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    
    <>
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Nav className="me-auto navbar_wrapper">
           
            <Link to="/login" className="login">
              <img src={`${process.env.PUBLIC_URL}/log-in.svg`} alt="Login Icon" className='log' />
             Login</Link>
            
            <div className='reg'>
            <Link to="/register">
              <img src={`${process.env.PUBLIC_URL}/user-plus.svg`} alt="User Plus Icon" className='userplus'/>
             Register</Link>
            </div>
          </Nav>
        </Navbar>
      </div>
    </>
  );
  
}

export default Header;
