/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

// Same Prop Type Pattern (JavaScript version):
// This demonstrates the compound component pattern with consistent prop types.
// In TypeScript (see ts folder), all components share the same generic type <T>
// to ensure type consistency across the component hierarchy.

import { createContext, use, useState } from 'react';

const GreetingContext = createContext();
GreetingContext.displayName = 'GreetingContext'; // Unique name in DevTools

function GreetingEditor({
  children = (
    <>
      <GreetingEditor.Input />
      <GreetingEditor.Text />
    </>
  )
}) {
  const [name, setName] = useState('World');

  return (
    <GreetingContext value={{ name, setName }}>{children}</GreetingContext>
  );
}
GreetingEditor.Input = function GreetingEditor_Input() {
  const context = use(GreetingContext);

  return (
    <input
      autoFocus
      onChange={e => context.setName(e.target.value)}
      value={context.name}
    />
  );
};
GreetingEditor.Text = function GreetingEditor_Text() {
  const context = use(GreetingContext);

  return <h1>Hello {context.name}!</h1>;
};

export default GreetingEditor;
