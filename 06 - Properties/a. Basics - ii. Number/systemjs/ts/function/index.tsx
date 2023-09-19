/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk     !*/

import React from 'react';
import ReactDOM from 'react-dom/client';

import Greeting from './Greeting';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(<Greeting name="World" count={3} />);
