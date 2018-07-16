/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

let promise = null;
let result = null;

const AsyncResult = () => {
  if (result) {
    return result;
  }

  if (!promise) {
    promise = new Promise(function(resolve) {
      setTimeout(() => resolve('Result!'), 3000);
    }).then(value => (result = value));
  }

  throw promise;
};

export default AsyncResult;
