/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

type GreetingContextType = {
  name: string;
  setName: (value: string) => void;
};

const GreetingContext = React.createContext<GreetingContextType>({
  name: null,
  setName: (value: string) => {}
});
GreetingContext.displayName = 'GreetingContext'; // Unique name in DevTools

type GreetingEditorProps = {
  children: JSX.Element[];
};

function GreetingEditor({ children }: GreetingEditorProps) {
  const [name, setName] = React.useState('World');

  return (
    <GreetingContext.Provider value={{ name, setName }}>
      {children}
    </GreetingContext.Provider>
  );
}
GreetingEditor.Input = function GreetingEditor_Input() {
  const context = React.useContext(GreetingContext);

  return (
    <input
      autoFocus
      onChange={e => context.setName(e.target.value)}
      value={context.name}
    />
  );
};
GreetingEditor.Text = function GreetingEditor_Text() {
  const context = React.useContext(GreetingContext);

  return <h1>Hello {context.name}!</h1>;
};

export default GreetingEditor;
