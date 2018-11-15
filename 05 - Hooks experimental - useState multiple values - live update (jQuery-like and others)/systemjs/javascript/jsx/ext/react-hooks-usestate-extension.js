/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function create$tate(val) {
  const [value, setValue] = React.useState(val);
  const liveValue = React.useRef(value);

  function setLiveValue(newValue) {
    if (typeof newValue === 'function') {
      liveValue.current = newValue(liveValue.current);
    } else {
      liveValue.current = newValue;
    }
    setValue(newValue);
  }

  let result = function(newValue) {
    if (newValue === undefined) {
      return liveValue.current;
    } else {
      setLiveValue(newValue);
    }
  };

  Object.defineProperty(result, 'value', {
    value: value,
    writable: false
  });

  result.setValue = setLiveValue;

  result[Symbol.iterator] = function*() {
    yield liveValue.current;
    yield setLiveValue;
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
