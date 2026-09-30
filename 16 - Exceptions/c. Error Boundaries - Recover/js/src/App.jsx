/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Divider from './Divider.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

export default function App() {
  return (
    <>
      <h1>Error Boundaries</h1>
      <ErrorBoundary>
        <Divider />
      </ErrorBoundary>
    </>
  );
}
