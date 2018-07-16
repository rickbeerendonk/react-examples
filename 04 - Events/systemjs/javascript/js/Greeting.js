/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class Greeting extends React.Component {
  onChange(e) {
    alert('Event handled.\nTarget: ' + e.target + '\nValue: ' + e.target.value);
  }
  render() {
    return React.createElement('input', {
      onChange: this.onChange,
      value: 'Hello World!'
    });
  }
}
