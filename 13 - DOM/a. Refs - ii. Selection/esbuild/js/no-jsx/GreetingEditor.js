/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement, Fragment, useEffect, useRef, useState } from 'react';

function GreetingEditor() {
  const inputRef = useRef();
  const [name, setName] = useState('World');
  useEffect(() => inputRef.current.select(), [] /* Only run on mount */);

  function handleChange(e) {
    setName(e.target.value);
  }

  return createElement(
    Fragment,
    null,
    createElement('input', {
      onChange: handleChange,
      ref: inputRef,
      value: name
    }),
    name && createElement('h1', null, 'Hello ', name, '!')
  );
}

export default GreetingEditor;
