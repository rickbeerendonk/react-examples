/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  // LayoutEffects are always before Effects.
  // Effect 1 is always executed before Effect 2

  React.useEffect(() => {
    console.log('Effect 1: ', name);
    return () => console.warn('Cleanup Effect 1: ', name);
  }, [name]);

  React.useLayoutEffect(() => {
    console.log('Layout Effect 1: ', name);
    return () => console.warn('Cleanup Layout Effect 1: ', name);
  }, [name]);

  React.useEffect(() => {
    console.log('Effect 2: ', name);
    return () => console.warn('Cleanup Effect 2: ', name);
  }, [name]);

  React.useLayoutEffect(() => {
    console.log('Layout Effect 2: ', name);
    return () => console.warn('Cleanup Layout Effect 2: ', name);
  }, [name]);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
