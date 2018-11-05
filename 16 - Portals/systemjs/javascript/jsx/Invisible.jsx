/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Visible from './Visible';

export default class Invisible extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <Visible />,
      document.getElementById('portal')
    );
  }
}
