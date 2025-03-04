/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import Middle from './Middle.jsx';

class Top extends Component {
  render() {
    return <Middle color={this.props.color} />;
  }
}

export default Top;
