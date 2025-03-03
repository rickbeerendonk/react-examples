/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createElement, Fragment, useState } from 'react';

function GreetingEditor() {
  const [name, setName] = useState('Europe\nWorld');

  function handleChange(e) {
    setName(e.target.value);
  }

  return createElement(
    Fragment,
    null,
    createElement('textarea', {
      autoFocus: true,
      onChange: handleChange,
      value: name
    }),
    createElement('pre', null, 'Hello ', name, '!')
  );
}

export default GreetingEditor;
