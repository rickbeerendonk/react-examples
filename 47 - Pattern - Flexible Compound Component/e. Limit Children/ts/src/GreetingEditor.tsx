/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import type { ReactElement } from 'react';
import { Children, createContext, use, useState } from 'react';

type GreetingContext = {
  name: string;
  setName: (value: string) => void;
};

// Export context
export const GreetingContext = createContext<GreetingContext | undefined>(
  undefined
);
GreetingContext.displayName = 'GreetingContext'; // Unique name in DevTools

// Unfortunately, TypeScript's type system has limitations when it comes
// to restricting React element types by their component function.
// The ReactElement<T> generic parameter refers to the props type,
// not the component type itself.
//
// The reality is: You need both approaches:
//
// Runtime validation (the Children.forEach check) - This actually enforces the constraint
// Type hints (the type definition) - This provides developer guidance but isn't truly enforceable
// The runtime validation is what actually prevents CustomContent from being used.
// The type definition provides hints in your IDE but TypeScript can't fully enforce
// component identity at compile time in this pattern.

type GreetingEditorInputElement = ReactElement<
  ReturnType<typeof GreetingEditor.Input>
>;
type GreetingEditorTextElement = ReactElement<
  ReturnType<typeof GreetingEditor.Text>
>;

type GreetingEditorProps = {
  children?:
    | GreetingEditorInputElement
    | GreetingEditorTextElement
    | (GreetingEditorInputElement | GreetingEditorTextElement)[];
};

function GreetingEditor({
  children = [<GreetingEditor.Input key={0} />, <GreetingEditor.Text key={1} />]
}: GreetingEditorProps) {
  const [name, setName] = useState('World');

  // Runtime validation to enforce the constraint
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
