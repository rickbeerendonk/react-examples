/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

let promise = null;
let result = null;

function AsyncResult({ duration = 3000 }) {
  // Return result if we already have one
  if (result) {
    return result;
  }

  // Create a promise if it doesn't exist yet
  if (!promise) {
    promise = new Promise(function (resolve) {
      setTimeout(() => resolve('Result!'), duration);
    }).then(value => (result = value));
  }

  // "Return" the promise
  throw promise;
}

export default AsyncResult;
