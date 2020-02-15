/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Parent from './Parent';

const node = document.getElementById('app');

ReactDOM.render(<Parent />, node);

// Add this to get componentWillUnmount / useEffect-cleanup events.
window.addEventListener('beforeunload', () =>
  ReactDOM.unmountComponentAtNode(node)
);
