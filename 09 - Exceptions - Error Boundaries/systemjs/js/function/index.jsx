/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2019 Rick Beerendonk   !*/

import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './ErrorBoundary';
import GreetingEditor from './GreetingEditor';

ReactDOM.render(
  <ErrorBoundary>
    <GreetingEditor />
  </ErrorBoundary>,
  document.getElementById('app')
);
