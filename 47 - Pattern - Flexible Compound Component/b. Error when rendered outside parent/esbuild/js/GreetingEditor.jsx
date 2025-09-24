/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { createContext, use, useState } from 'react';

// Create empty context
const GreetingContext = createContext();
GreetingContext.displayName = 'GreetingContext';

function GreetingEditor({ children }) {
  const [name, setName] = useState('World');

  return (
    <GreetingContext.Provider value={{ name, setName }}>
      {children}
    </GreetingContext.Provider>
  );
}
GreetingEditor.Input = function GreetingEditor_Input() {
  const context = use(GreetingContext);

  // Check context
  if (!context) {
    throw new Error(
      'Compound component GreetingEditor_Input rendered outside GreetingEditor'
    );
  }

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

  // Check context
  if (!context) {
    throw new Error(
      'Compound component GreetingEditor_Text rendered outside GreetingEditor'
    );
  }

  return <h1>Hello {context.name}!</h1>;
};

export default GreetingEditor;
