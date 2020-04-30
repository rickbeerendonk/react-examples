/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor() {
  const [name, setName] = React.useState('Europe\nWorld');

  function handleChange(e) {
    setName(e.target.value);
  }

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('textarea', {
      autoFocus: true,
      onChange: handleChange,
      value: name
    }),
    React.createElement('pre', null, 'Hello ', name, '!')
  );
}

export default GreetingEditor;
