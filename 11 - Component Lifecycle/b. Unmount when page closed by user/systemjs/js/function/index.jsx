/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2020 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Parent from './Parent';

const node = document.getElementById('root');

ReactDOM.render(<Parent />, node);

// Add this to get componentWillUnmount / useEffect-cleanup events.
window.addEventListener('beforeunload', () =>
  ReactDOM.unmountComponentAtNode(node)
);
