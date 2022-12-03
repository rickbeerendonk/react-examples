/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019-2022 Rick Beerendonk     !*/

import React from 'react';

type GreetingEditorProps = {
  children: React.ReactNode;
};

function GreetingEditor(props: GreetingEditorProps) {
  const [name, setName] = React.useState('World');

  return React.Children.map(props.children, child =>
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

GreetingEditor.Input = function GreetingEditor_Input(
  props: GreetingEditorInputProps
) {
  return (
    <input
      autoFocus
      onChange={e => props.setName(e.target.value)}
      value={props.name}
    />
  );
};

type GreetingEditorTextProps = {
  name?: string;
};

GreetingEditor.Text = function GreetingEditor_Text(
  props: GreetingEditorTextProps
) {
  return <h1>Hello {props.name}!</h1>;
};

export default GreetingEditor;
