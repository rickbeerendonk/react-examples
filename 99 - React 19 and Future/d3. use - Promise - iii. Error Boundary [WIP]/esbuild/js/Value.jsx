/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { use } from 'react';

function valueFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Hello, world!');
    }, 2000);
  });
}

const valuePromise = valueFunc();

export default function Value() {
  const value = use(valuePromise);
  return <h1>{value}</h1>;
}
