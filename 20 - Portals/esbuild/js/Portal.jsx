/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createPortal } from 'react-dom';

import Visible from './Visible.jsx';

function Portal() {
  return createPortal(<Visible />, document.getElementById('portal'));
}

export default Portal;
