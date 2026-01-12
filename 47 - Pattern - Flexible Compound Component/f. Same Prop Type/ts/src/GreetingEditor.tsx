/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

// Same Prop Type Pattern:
// All components (parent and children) share the same generic type <T>.
// This ensures type consistency across the entire compound component hierarchy.
// Useful when you need to pass typed configuration or data throughout the component tree.

import type { JSX } from 'react';
import { createContext, use, useState } from 'react';

type GreetingContext = {
  name: string;
  setName: (value: string) => void;
};

const GreetingContext = createContext<GreetingContext | undefined>(undefined);
GreetingContext.displayName = 'GreetingContext'; // Unique name in DevTools

// Parent component accepts generic type T
type GreetingEditorProps<T> = {
  defaultValue: T;
  children?: JSX.Element | JSX.Element[];
};

function GreetingEditor<T>({
  defaultValue,
  children = [<GreetingEditor.Input key={0} />, <GreetingEditor.Text key={1} />]
}: GreetingEditorProps<T>) {
  const [name, setName] = useState('World');

  return (
    <GreetingContext value={{ name, setName }}>{children}</GreetingContext>
  );
}

// Sub-components also accept the same generic type T
type SubComponentProps<T> = {
  value?: T; // Can accept typed data (though not used in this example)
};

GreetingEditor.Input = function GreetingEditor_Input<T>({
  value
}: SubComponentProps<T>) {
  const context = use(GreetingContext);

  return (
    <input
      autoFocus
      onChange={e => context.setName(e.target.value)}
      value={context.name}
    />
  );
};
GreetingEditor.Text = function GreetingEditor_Text<T>({
  value
}: SubComponentProps<T>) {
  const context = use(GreetingContext);

  return <h1>Hello {context.name}!</h1>;
};

// Factory function ensures all components share the same type T
// Usage: GreetingEditorFactory<string>() creates type-safe components
function GreetingEditorFactory<T>() {
  return {
    GreetingEditor: GreetingEditor<T>,
    GreetingEditor_Input: GreetingEditor.Input<T>,
    GreetingEditor_Text: GreetingEditor.Text<T>
  };
}

export default GreetingEditorFactory;

//export default GreetingEditor;
