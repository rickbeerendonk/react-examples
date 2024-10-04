/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

const containerStyle = {
  backgroundColor: 'lightgray',
  padding: 10
};

const contentStyle = {
  backgroundColor: 'white',
  padding: 10
};

class Container extends Component {
  render() {
    return (
      <div style={containerStyle}>
        The 1st item:
        <div style={contentStyle}>{this.props.slot1}</div>
        The 2nd item:
        <div style={contentStyle}>{this.props.slot2}</div>
      </div>
    );
  }
}

export default Container;
