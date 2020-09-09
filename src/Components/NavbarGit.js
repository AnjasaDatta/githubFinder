import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
const NavbarGit = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-light bg-danger'>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <i className='fab fa-github'> GitHub Finder</i>
            </li>
          </ul>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link ' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link ' to='/About'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavbarGit;
