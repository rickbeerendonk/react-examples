/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom/client';

import ErrorBoundary from './ErrorBoundary';
import GreetingEditor from './GreetingEditor';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <ErrorBoundary>
    <GreetingEditor />
  </ErrorBoundary>
);
