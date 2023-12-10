/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import {
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useState
} from 'react';

function log(text) {
  console.log(`${text} [${document.querySelector('h1').outerText}]`);
}

function GreetingEditor() {
  const [name, setName] = useState('1');

  // Order: InsertionEffect - LayoutEffect - Effect

  useEffect(() => {
    log('Effect: ' + name);
    return () => log('Cleanup Effect: ' + name);
  }, [name]);

  useLayoutEffect(() => {
    log('Layout Effect: ' + name);
    return () => log('Cleanup Layout Effect: ' + name);
  }, [name]);

  useInsertionEffect(() => {
    log('Insertion Effect: ' + name);
    return () => log('Cleanup Insertion Effect: ' + name);
  }, [name]);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>{name}</h1>
    </>
  );
}

export default GreetingEditor;
