/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import { use$tate } from './ext/react-hooks-usestate-extension';

function GreetingEditor() {
  // As an iterable (just like React)
  // Get: foo
  // Set: setFoo(...)
  const [foo, setFoo] = use$tate('Foo');

  // As an object
  // Get: bar.value
  // Set: bar.setValue(...)
  const bar = use$tate('Bar');

  // As an object (with destructuring )
  // Get: baz
  // Set: setBaz(...)
  const { value: baz, setValue: setBaz } = use$tate('Baz');

  // As jQuery-like getters and setters (function overloading)
  // Get: jq()
  // Set: jq(...)
  const jq = use$tate('jQuery');

  // Multiple jQuery like getters and setters (function overloading)
  // Get: jq()
  // Set: jq(...)
  const [first, second, third] = use$tate(true, 2, 'three');

  // Value can also be a function, just to test it still works
  const [fourth, fifth, sixth] = use$tate(() => false, () => 5, () => 'six');

  return (
    <React.Fragment>
      <input onChange={e => setFoo(e.target.value)} value={foo} />
      {` => ${foo}`}
      <br />

      <input onChange={e => bar.setValue(e.target.value)} value={bar.value} />
      {` => ${bar.value}`}
      <br />

      <input onChange={e => setBaz(e.target.value)} value={baz} />
      {` => ${baz}`}
      <br />

      <input onChange={e => jq(e.target.value)} value={jq()} />
      {` => ${jq()}`}
      <br />

      <input onChange={e => first(e.target.value)} value={first()} />
      {` => ${first()}`}
      <br />

      <input onChange={e => second(e.target.value)} value={second()} />
      {` => ${second()}`}
      <br />

      <input onChange={e => third(e.target.value)} value={third()} />
      {` => ${third()}`}
      <br />

      <input onChange={e => fourth(e.target.value)} value={fourth()} />
      {` => ${fourth()}`}
      <br />

      <input onChange={e => fifth(e.target.value)} value={fifth()} />
      {` => ${fifth()}`}
      <br />

      <input onChange={e => sixth(e.target.value)} value={sixth()} />
      {` => ${sixth()}`}
      <br />
    </React.Fragment>
  );
}

export default GreetingEditor;
