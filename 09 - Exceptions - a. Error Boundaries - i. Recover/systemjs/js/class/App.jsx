/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import Divider from './Divider';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <React.Fragment>
      <h1>Error Boundaries</h1>
      <ErrorBoundary>
        <Divider />
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
