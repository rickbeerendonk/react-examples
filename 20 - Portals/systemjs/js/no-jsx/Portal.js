/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Visible from './Visible';

export default class Portal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      React.createElement(Visible),
      document.getElementById('portal')
    );
  }
}
