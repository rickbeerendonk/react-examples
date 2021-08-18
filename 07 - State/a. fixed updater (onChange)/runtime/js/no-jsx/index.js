/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  function handleChange(e) {
    setName(e.target.value);
  }

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('input', {
      autoFocus: true,
      onChange: handleChange,
      value: name
    }),
    React.createElement('h1', null, 'Hello ', name, '!')
  );
}

ReactDOM.render(
  React.createElement(GreetingEditor),
  document.getElementById('root')
);
