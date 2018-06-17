/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

const containerStyle = {
  backgroundColor: 'lightgray',
  padding: 10
}

const contentStyle = {
  backgroundColor: 'white',
  padding: 10
}

export default class Container extends React.Component {
  render() {
    return (
      <div style={containerStyle}>
        The 1st item:
        <div style={contentStyle}>
          {this.props.slot1}
        </div>
        The 2nd item:
        <div style={contentStyle}>
          {this.props.slot2}
        </div>
      </div>
    );
  }
}
