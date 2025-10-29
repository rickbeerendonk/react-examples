/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import type { JSX } from 'react';
import { createContext, use, useState } from 'react';

type GreetingContext = {
  name: string;
  setName: (value: string) => void;
};

const GreetingContext = createContext<GreetingContext>(undefined);
GreetingContext.displayName = 'GreetingContext'; // Unique name in DevTools

type GreetingEditorProps = {
  children: JSX.Element | JSX.Element[];
};

function GreetingEditor({ children }: GreetingEditorProps) {
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
