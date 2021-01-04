/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor({
  // Default Children
  children = [<GreetingEditor.Input key={0} />, <GreetingEditor.Text key={1} />]
}) {
  const [name, setName] = React.useState('World');

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      name,
      setName
    })
  );
}
GreetingEditor.Input = function GreetingEditor_Input({ name, setName }) {
  return (
    <input autoFocus onChange={e => setName(e.target.value)} value={name} />
  );
};
GreetingEditor.Text = function GreetingEditor_Text({ name }) {
  return <h1>Hello {name}!</h1>;
};

export default GreetingEditor;
