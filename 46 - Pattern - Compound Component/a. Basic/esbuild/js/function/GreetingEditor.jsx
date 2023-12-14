/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Children, cloneElement, useState } from 'react';

function GreetingEditor({ children }) {
  const [name, setName] = useState('World');

  // Pass state as properties to the render children.
  // Because we don't "create" the children, we have to use cloneElement
  return (
    <>
      {Children.map(children, child =>
        cloneElement(child, {
          name,
          setName
        })
      )}
    </>
  );
}
GreetingEditor.Input = function GreetingEditor_Input({ name, setName }) {
  return <input onChange={e => setName(e.target.value)} value={name} />;
};
GreetingEditor.Text = function GreetingEditor_Text({ name }) {
  return <h1>Hello {name}!</h1>;
};

export default GreetingEditor;
