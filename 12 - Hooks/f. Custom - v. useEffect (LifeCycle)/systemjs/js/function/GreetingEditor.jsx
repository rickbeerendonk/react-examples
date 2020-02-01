/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import useLifecycle from './hooks/lifecycle';

function GreetingEditor() {
  const [name, setName] = React.useState('World');
  const [other, setOther] = React.useState('Other');

  useLifecycle(
    () => (document.title = 'Mount: ' + name),
    () => (document.title = 'Update: ' + name)
  );

  function handleChange1(e) {
    setName(e.target.value);
  }

  function handleChange2(e) {
    setOther(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange1} value={name} />
      <h1>Hello {name}!</h1>
      <input autoFocus onChange={handleChange2} value={other} />
      <h2>Hello {other}!</h2>
    </React.Fragment>
  );
}

export default GreetingEditor;
