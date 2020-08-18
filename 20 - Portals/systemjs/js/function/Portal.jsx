/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Visible from './Visible';

function Portal() {
  return ReactDOM.createPortal(<Visible />, document.getElementById('portal'));
}

export default Portal;
