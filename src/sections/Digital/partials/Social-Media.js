import React, { Component } from 'react';

import SMediaLarge from '../img/social-media-large.svg';
import SMediaSmall from '../img/social-media-small.svg';

class SMedia extends Component {
  render() {
    return (
      <div className='Social-Media'>
        <h3>SOCIAL MEDIA INTEGRATION</h3>
        <img src={SMediaLarge} alt='' />
        <p>
          Integrating your web-app, mobile-app and social media channels
          empowers the business and helps the brand to connect with consumers
          directly. We combine methods that can address your customer queries
          and questions instantly, in turn making it easier for you to
          communicate important news and updates to your followers and fan base
          in real-time expanding the reach to the wider audience.
        </p>
      </div>
    );
  }
}

export default SMedia;
