/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019-2021 Rick Beerendonk     !*/

function AsyncResult({ name, time }) {
  AsyncResult.Data[name];
  if (!AsyncResult.Data[name]) {
    AsyncResult.Data[name] = {
      result: null,
      promise: new Promise(function (resolve) {
        setTimeout(() => resolve(`Result ${name}!`), time);
      }).then(value => {
        AsyncResult.Data[name].result = value;
      })
    };
  }

  if (AsyncResult.Data[name].result) {
    // Return result if we already have one
    return AsyncResult.Data[name].result;
  } else {
    // "Return" the promise
    throw AsyncResult.Data[name].promise;
  }
}
AsyncResult.Data = new Map();

export default AsyncResult;
