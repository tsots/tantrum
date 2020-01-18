import React, { Component } from 'react';

import CBrandingLarge from '../img/corporate-branding-large.svg';
import CBrandingSmall from '../img/corporate-branding-small.svg';

class CBranding extends Component {
  render() {
    return (
      <div className='Corporate-Branding'>
        <h3>CORPORATE BRANDING</h3>
        <img src={CBrandingLarge} alt='Branding Strategy Illustration' />
        <p>
          BLet us design an Identity for your business using awesome and unique
          combinations of color, graphics and typography in order to design
          elements that we can use across all media types.
          <br />
          <br />
          Media types include websites, marketing assets, social media profiles
          that will serve as an advocate for your brand.
        </p>
      </div>
    );
  }
}

export default CBranding;
