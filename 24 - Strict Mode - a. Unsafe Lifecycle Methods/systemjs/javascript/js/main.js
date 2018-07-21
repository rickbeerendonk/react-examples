/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(React.createElement(App), document.getElementById('app'));
ReactDOM.unmountComponentAtNode(document.getElementById('app'));
