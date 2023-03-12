/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import React from 'react';

function log(text) {
  console.log(`${text} [${document.querySelector('h1').outerText}]`);
}

function GreetingEditor() {
  const [name, setName] = React.useState('1');

  // Order: InsertionEffect - LayoutEffect - Effect

  React.useEffect(() => {
    log('Effect: ' + name);
    return () => log('Cleanup Effect: ' + name);
  }, [name]);

  React.useLayoutEffect(() => {
    log('Layout Effect: ' + name);
    return () => log('Cleanup Layout Effect: ' + name);
  }, [name]);

  React.useInsertionEffect(() => {
    log('Insertion Effect: ' + name);
    return () => log('Cleanup Insertion Effect: ' + name);
  }, [name]);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>{name}</h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
