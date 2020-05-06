/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from '../../node_modules_unstable/react/';
import ReactDOM from '../../node_modules_unstable/react-dom';
import Greeting from './Greeting';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Greeting />, root);
// TODO (doesn't work): ReactDOM.unstable_createRoot(root).render(<Greeting />);
