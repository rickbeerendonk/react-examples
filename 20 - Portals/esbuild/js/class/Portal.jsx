/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';
import { createPortal } from 'react-dom';

import Visible from './Visible.jsx';

export default class Portal extends Component {
  render() {
    return createPortal(<Visible />, document.getElementById('portal'));
  }
}
