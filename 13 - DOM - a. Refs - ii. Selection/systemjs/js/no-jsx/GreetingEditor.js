/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function GreetingEditor() {
  const inputRef = React.useRef(null);
  const [name, setName] = React.useState('World');
  React.useEffect(() => inputRef.current.select(), [] /* Only run on mount */);

  function handleChange(e) {
    setName(e.target.value);
  }

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('input', {
      onChange: handleChange,
      ref: inputRef,
      value: name
    }),
    name && React.createElement('h1', null, 'Hello ', name, '!')
  );
}

export default GreetingEditor;
