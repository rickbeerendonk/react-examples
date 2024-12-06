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

const valuePromise = valueFunc();

function Value() {
  const value = use(valuePromise);
  return <h1>{value}</h1>;
}

function App() {
  return (
    <>
      <h1>Demo</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Value />
      </Suspense>
    </>
  );
}

export default App;
