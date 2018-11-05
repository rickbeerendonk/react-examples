/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

const containerStyle = {
  backgroundColor: 'lightgray',
  padding: 10
};

const contentStyle = {
  backgroundColor: 'white',
  padding: 10
};

export default class Container extends React.Component {
  render() {
    return (
      <div style={containerStyle}>
        The only item:
        <div style={contentStyle}>{this.props.children}</div>
      </div>
    );
  }
}
