/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

const GreetingContext = React.createContext();
GreetingContext.displayName = 'GreetingContext'; // Unique name in DevTools

function GreetingEditor({ children }) {
  const [name, setName] = React.useState('World');

  return (
    <>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          name,
          setName
        })
      )}
    </>
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
