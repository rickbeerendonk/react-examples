/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
ReactDOM.unmountComponentAtNode(document.getElementById('root'));
