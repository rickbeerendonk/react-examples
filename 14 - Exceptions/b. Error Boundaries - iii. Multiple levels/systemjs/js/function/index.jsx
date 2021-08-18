/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './ErrorBoundary';
import GreetingEditor from './GreetingEditor';
import Other from './Other';

ReactDOM.render(
  <ErrorBoundary>
    <Other>
      <GreetingEditor />
    </Other>
  </ErrorBoundary>,
  document.getElementById('root')
);
