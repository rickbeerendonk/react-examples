/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019-2022 Rick Beerendonk     !*/

import { Children, cloneElement, useState } from 'react';
import type { JSX } from 'react';

type GreetingEditorProps = {
  children: JSX.Element[];
};

function GreetingEditor({
  // Default Children
  children = [<GreetingEditor.Input key={0} />, <GreetingEditor.Text key={1} />]
}: GreetingEditorProps) {
  const [name, setName] = useState('World');

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

type GreetingEditorInputProps = {
  name?: string;
  setName?: (name: string) => void;
};

GreetingEditor.Input = function GreetingEditor_Input({
  name,
  setName
}: GreetingEditorInputProps) {
  return <input onChange={e => setName(e.target.value)} value={name} />;
};

type GreetingEditorTextProps = {
  name?: string;
};

GreetingEditor.Text = function GreetingEditor_Text({
  name
}: GreetingEditorTextProps) {
  return <h1>Hello {name}!</h1>;
};

export default GreetingEditor;
