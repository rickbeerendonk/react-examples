/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createContext, useContext, useState } from 'react';

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
    <GreetingContext.Provider value={{ name, setName }}>
      {children}
    </GreetingContext.Provider>
  );
}
GreetingEditor.Input = function GreetingEditor_Input() {
  const context = useContext(GreetingContext);

  return (
    <input
      autoFocus
      onChange={e => context.setName(e.target.value)}
      value={context.name}
    />
  );
};
GreetingEditor.Text = function GreetingEditor_Text() {
  const context = useContext(GreetingContext);

  return <h1>Hello {context.name}!</h1>;
};

export default GreetingEditor;
