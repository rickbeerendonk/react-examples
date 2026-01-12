/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { use } from 'react';

// Simulate an async operation, e.g., a fetch request
const resultPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve('Result!');
  }, 3000);
});

export default function AsyncResult() {
  const value = use(resultPromise);
  return <h1>{value}</h1>;
}
