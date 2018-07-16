/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

let promise = null;
let result = null;

const AsyncResult = () => {
  // Return result if we already have one
  if (result) {
    return result;
  }

  // Create a promise if it doesn't exist yet
  if (!promise) {
    promise = new Promise(function(resolve) {
      setTimeout(() => resolve('Result!'), 3000);
    }).then(value => (result = value));
  }

  // "Return" the promise
  throw promise;
};

export default AsyncResult;
