/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function create$tate(val) {
  const [value, setValue] = React.useState(val);
  let liveValue = value;

  function setLiveValue(newValue) {
    if (typeof newValue === 'function') {
      liveValue = newValue(liveValue);
    } else {
      liveValue = newValue;
    }
    setValue(newValue);
  }

  let result = function(newValue) {
    if (newValue === undefined) {
      return liveValue;
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
    yield liveValue;
    yield setLiveValue;
  };

  return result;
}

export function use$tate(...val) {
  if (!val) {
    return null;
  }

  if (val.length === 1) {
    return create$tate(val[0]);
  }

  return val.map(v => create$tate(v));
}

export default {
  use$tate
};
