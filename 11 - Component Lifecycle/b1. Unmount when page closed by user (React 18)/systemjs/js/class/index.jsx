/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Parent from './Parent';

const node = document.getElementById('root');

const root = ReactDOM.createRoot(node);
root.render(<Parent />);

// Add this to get componentWillUnmount / useEffect-cleanup events.
window.addEventListener('beforeunload', () => root.unmount());
