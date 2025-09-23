/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Suspense, use } from 'react';

function valueFunc(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 2000);
  });
}

const valuePromise = valueFunc();

function Value() {
  const value = use<string>(valuePromise);
  return <h1>{value}</h1>;
}

export default function App() {
  return (
    <>
      <h1>Demo</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Value />
      </Suspense>
    </>
  );
}
