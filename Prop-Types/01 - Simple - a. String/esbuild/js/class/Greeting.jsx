/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
import { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

export default Greeting;
