/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';

//import { Greeting } from './Greeting';

const Greeting = React.lazy(() =>
  import('./Greeting').then(module => ({ default: module.Greeting }))
);

/*
function superLazy(moduleName, exportName) {
  return React.lazy(() =>
    import(moduleName).then(module => ({ default: module[exportName] }))
  );
}
const Greeting = superLazy('./Greeting', 'Greeting');
*/

function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <React.Fragment>
      <button onClick={() => setVisible(v => !v)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Greeting />
        </React.Suspense>
      )}
    </React.Fragment>
  );
}

export default App;
