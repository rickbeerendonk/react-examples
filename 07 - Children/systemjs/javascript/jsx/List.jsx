/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class List extends React.Component {
  render() {
    return (
      <ul>{
        React.Children.map(
          this.props.children, 
          (child, i) => <li key={i}>{child}</li>
        )
      }</ul>
    );
  }
}
