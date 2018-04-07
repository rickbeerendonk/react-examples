/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';
import ReactDOM from 'react-dom';

import Visible from './Visible';

export default class Invisible extends React.Component {
  render() {
    return ReactDOM.createPortal(
      React.createElement(Visible),
      document.getElementById('portal')
    );
  }
}