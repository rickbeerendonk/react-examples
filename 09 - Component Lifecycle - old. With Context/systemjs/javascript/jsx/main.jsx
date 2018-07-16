/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { logEvent } from 'utils';

logEvent('-- add component --', 'action');
ReactDOM.render(<App />, document.getElementById('app'));

logEvent('-- remove component --', 'action');
ReactDOM.unmountComponentAtNode(document.getElementById('app'));
