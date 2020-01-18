import React, { Component } from 'react';

import ResearchLarge from '../img/research-large.svg';
import ResearchSmall from '../img/research-small.svg';

class Research extends Component {
  render() {
    return (
      <div className='Research'>
        <h3>RESEARCH</h3>
        <img src={ResearchLarge} alt='' />
        <p>
          We are devoted strategists and believe that thoughtful information
          architecture lays the groundwork for an intuitive, efficient, and
          effective website. We perform a thorough audit of existing and
          anticipated content, which we use to map out the most logical and
          organized structure for your site.
        </p>
      </div>
    );
  }
}

export default Research;
