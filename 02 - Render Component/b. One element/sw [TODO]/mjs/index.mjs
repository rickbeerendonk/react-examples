/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

import * as React from './react.development.mjs';
import ReactDOM from './react-dom.development.mjs';

import Greeting from './greeting.mjs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Greeting));
