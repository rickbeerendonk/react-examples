/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createContext, useContext, useState } from 'react';

type GreetingContext = {
  name: string;
  setName: (value: string) => void;
};

const GreetingContext = createContext<GreetingContext | undefined>(undefined);
GreetingContext.displayName = 'GreetingContext'; // Unique name in DevTools

type GreetingEditorProps = {
  children?: JSX.Element[];
};

function GreetingEditor({
  children = [<GreetingEditor.Input key={0} />, <GreetingEditor.Text key={1} />]
}: GreetingEditorProps) {
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
