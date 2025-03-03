/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
import { Component } from 'react';

class Sum extends Component {
  render() {
    return (
      <h1>
        {this.props.first} + {this.props.second} ={' '}
        {this.props.first + this.props.second}
      </h1>
    );
  }
}
Sum.defaultProps = { second: 1 };
Sum.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number // Optional
};

export default Sum;
