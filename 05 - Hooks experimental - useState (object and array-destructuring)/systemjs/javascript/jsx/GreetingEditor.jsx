/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function upperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function useState(val, name) {
  const [value, setValue] = React.useState(val);
  const getName = name || 'value';
  const setName = name ? `set${upperCaseFirst(name)}` : 'setValue';
  return {
    get [getName]() {
      return value;
    },
    [setName](val) {
      setValue(val);
    },
    [Symbol.iterator]: function*() {
      yield value;
      yield setValue;
    }
  };
}

function GreetingEditor() {
  // As an iterable (just like React)
  const [foo, setFoo] = useState('Foo');

  // As a object
  const bar = useState('Bar');

  // As a object (with destructuring )
  const { value: baz, setValue: setBaz } = useState('Baz');

  // As a object (with predefined get/set names)
  const qux = useState('Qux', 'quux');

  // As a object (with predefined get/set names and destructuring)
  const { corge, setCorge } = useState('Corge', 'corge');

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

      <input onChange={e => qux.setQuux(e.target.value)} value={qux.quux} />
      {` => ${qux.quux}`}
      <br />

      <input onChange={e => setCorge(e.target.value)} value={corge} />
      {` => ${corge}`}
      <br />
    </React.Fragment>
  );
}

export default GreetingEditor;
