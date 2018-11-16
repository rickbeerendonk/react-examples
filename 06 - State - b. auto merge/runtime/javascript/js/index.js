/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */

function GreetingEditor() {
  const [name, setName] = React.useState('World');
  const [other /*, setOther */] = React.useState('More state');

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
    React.createElement('h1', null, 'Hello ', name, '!'),
    React.createElement('h2', null, other)
  );
}

ReactDOM.render(
  React.createElement(GreetingEditor),
  document.getElementById('app')
);
