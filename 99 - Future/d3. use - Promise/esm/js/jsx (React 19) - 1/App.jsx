/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Suspense, use } from 'react';

function valueFunc() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 2000);
  });
}

function App() {
  const value = use(valueFunc);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>} />
      <h1>{value}</h1>
      <Suspense />
    </>
  );
}

export default App;
