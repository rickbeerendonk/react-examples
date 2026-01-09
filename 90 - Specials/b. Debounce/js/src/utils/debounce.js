/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

export function debounce(func, timeout = 300) {
  let timer;

  // Return a normal function, so we get the same "this" value
  // as the wrapped func would get without debounce()
  return function (...args) {
    clearTimeout(timer);

    // Use a arrow function, so "this" is not influenced
    // by the timeout call
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
