/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import Bottom from './Bottom.jsx';

class Middle extends Component {
  render() {
    return <Bottom color={this.props.color} />;
  }
}

export default Middle;
