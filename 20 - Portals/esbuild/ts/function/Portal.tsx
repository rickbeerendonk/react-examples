/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import ReactDOM from 'react-dom';

import Visible from './Visible.tsx';

function Portal() {
  return ReactDOM.createPortal(<Visible />, document.getElementById('portal'));
}

export default Portal;
