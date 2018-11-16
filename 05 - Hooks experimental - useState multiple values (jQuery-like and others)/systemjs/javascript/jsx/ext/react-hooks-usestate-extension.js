/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function create$tate(val) {
  const [value, setValue] = React.useState(val);
  let result = function(newValue) {
    if (newValue === undefined) {
      return value;
    } else {
      setValue(newValue);
    }
  };

  Object.defineProperty(result, 'value', {
    value: value,
    writable: false
  });

  result.setValue = setValue;

  result[Symbol.iterator] = function*() {
    yield value;
    yield setValue;
  };

  return result;
}

export function use$tate(...val) {
  if (val.length < 2) {
    return create$tate(val[0]);
  }

  return val.map(v => create$tate(v));
}

export default {
  use$tate,
  useState: use$tate
};
