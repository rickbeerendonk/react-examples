/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createElement } from 'react';
import { createPortal } from 'react-dom';

import Visible from './Visible.js';

export default class Portal extends Component {
  render() {
    return createPortal(
      createElement(Visible),
      document.getElementById('portal')
    );
  }
}
