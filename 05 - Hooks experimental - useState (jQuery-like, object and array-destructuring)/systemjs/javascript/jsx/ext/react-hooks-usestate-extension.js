/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function upperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function useState(val, name) {
  const [value, setValue] = React.useState(val);
  const getName = name || 'value';
  const setName = name ? `set${upperCaseFirst(name)}` : 'setValue';

  let result = function(newValue) {
    if (newValue === undefined) {
      return value;
    } else {
      setValue(newValue);
    }
  };

  Object.defineProperty(result, getName, {
    value: value,
    writable: false
  });

  result[setName] = function(val) {
    setValue(val);
  };

  result[Symbol.iterator] = function*() {
    yield value;
    yield setValue;
  };

  return result;
}

export default {
  useState
};
