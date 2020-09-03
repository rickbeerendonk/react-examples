/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from './react.development.mjs';
import ReactDOM from './react-dom.development.mjs';

import htm from '../../../../../../node_modules/htm/dist/htm.module.js';
const html = htm.bind(React.createElement);

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(html`<h1>Hello React ${React.version}!</h1>`, app);
