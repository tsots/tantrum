import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/logo-large.svg';

//require('../img/logo-large.svg')

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='Logo'>
          <Link to='/'>
            <img src={Logo} />
          </Link>
        </div>
        <div className=''>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Identity'>Identity</Link>
          <Link to='/Digital'>Digital</Link>
          <Link to='/Contact'>Contact</Link>
        </div>
      </div>
    );
  }
}

export default Header;
