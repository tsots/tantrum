import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/logo-large.svg';

//require('../img/logo-large.svg')

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <ul className='logo'>
          <li>
            <Link to='/'>
              <img src={Logo} />
            </Link>
          </li>
        </ul>
        <ul className='links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Identity'>Identity</Link>
          </li>
          <li>
            <Link to='/Digital'>Digital</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
