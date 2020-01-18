import React, { Component } from 'react';

import BstrategyLarge from '../img/branding-strategy-large.svg';
import BstrategySmall from '../img/branding-strategy-small.svg';

class BStrategy extends Component {
  render() {
    return (
      <div className='Branding-Strategy'>
        <h3>BRANDING STRATEGY</h3>
        <img src={BstrategyLarge} alt='Branding Strategy Illustration' />
        <p>
          Brand strategy is a long-term plan for the development of a successful
          brand. We develop strategies that assist your idea, business and or
          corporation evoke emotions, affinity with your target audience.
        </p>
      </div>
    );
  }
}

export default BStrategy;
