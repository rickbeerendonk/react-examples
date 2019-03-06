/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
import React from 'react';

import './Greeting.css';

function Greeting({ name }) {
  return name ? <h1 className="greeting">Hello {name}!</h1> : null;
}
Greeting.propTypes = {
  name: PropTypes.string
};
Greeting.defaultProps = {
  name: null
};

export default Greeting;
