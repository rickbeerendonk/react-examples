/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019-2022 Rick Beerendonk     !*/

import React from 'react';

type GreetingEditorProps = {
  children: JSX.Element[];
};

function GreetingEditor({
  // Default Children
  children = [<GreetingEditor.Input key={0} />, <GreetingEditor.Text key={1} />]
}: GreetingEditorProps) {
  const [name, setName] = React.useState('World');

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      name,
      setName
    })
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
  return (
    <input autoFocus onChange={e => setName(e.target.value)} value={name} />
  );
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
