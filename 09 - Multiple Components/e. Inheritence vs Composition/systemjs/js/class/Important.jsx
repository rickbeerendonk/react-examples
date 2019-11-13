/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class Important extends React.Component {
  render() {
    return <strong>!!! {this.props.children} !!!</strong>;
  }
}

export default Important;
