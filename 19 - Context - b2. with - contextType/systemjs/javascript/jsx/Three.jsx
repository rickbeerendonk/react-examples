/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import ColorContext from './color-context';
import React from 'react';

export default class Three extends React.Component {
  static contextType = ColorContext; // Alternative to using Consumer
  render() {
    return <h1 style={{ color: this.context.color }}>Three</h1>;
  }
}
