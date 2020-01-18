import React, { Component } from 'react';

import WDesignLarge from '../img/web-design-large.svg';
import WDesignSmall from '../img/web-design-small.svg';

class WDesign extends Component {
  render() {
    return (
      <div className='Web-Design'>
        <h3>DESIGN & DEVELOPMENT</h3>
        <img src={WDesignLarge} alt='' />
        <p>
          Web design refers to both the aesthetic portion of the website and
          it’s usability. We use various design programs to create the layout
          and other visual elements of the website.
          <br />
          <br />
          Our Developers thereafter, take the website design and actually turn
          into a functioning website, bringing to life the design files.
        </p>
      </div>
    );
  }
}

export default WDesign;
