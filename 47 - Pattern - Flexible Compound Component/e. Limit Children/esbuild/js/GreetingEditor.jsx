/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { Children, createContext, use, useState } from 'react';

export const GreetingContext = createContext();
GreetingContext.displayName = 'GreetingContext'; // Unique name in DevTools

function GreetingEditor({ children }) {
  const [name, setName] = useState('World');

  // Validate that only allowed children are used
  Children.forEach(children, child => {
    if (
      child &&
      child.type !== GreetingEditor.Input &&
      child.type !== GreetingEditor.Text
    ) {
      throw new Error(
        'GreetingEditor only accepts GreetingEditor.Input and GreetingEditor.Text as children'
      );
    }
  });

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
