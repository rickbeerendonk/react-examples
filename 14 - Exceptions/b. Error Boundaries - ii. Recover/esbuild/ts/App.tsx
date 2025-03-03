/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Divider from './Divider.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';

function App() {
  return (
    <>
      <h1>Error Boundaries</h1>
      <ErrorBoundary>
        <Divider />
      </ErrorBoundary>
    </>
  );
}

export default App;
