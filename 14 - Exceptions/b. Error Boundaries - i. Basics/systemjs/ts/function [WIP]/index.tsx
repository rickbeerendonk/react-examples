/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './ErrorBoundary';
import GreetingEditor from './GreetingEditor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <GreetingEditor />
  </ErrorBoundary>
);