/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

class Important extends Component {
  render() {
    return <strong>!!! {this.props.children} !!!</strong>;
  }
}

export default Important;
