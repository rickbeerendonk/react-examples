/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
import React from 'react';

class Greeting extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  static propTypes = {
    name: PropTypes.string.isRequired
  };
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default Greeting;
