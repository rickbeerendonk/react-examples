/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import EditBox from './EditBox';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.createRoot(root).render(<EditBox value="World" onChange={() => {}} />);
