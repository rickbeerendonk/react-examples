/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting(props) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('h3', null, 'Greeting:'),
    // Only render when a not-name is falsy:
    !props.name || React.createElement('h1', null, 'Hello ', props.name, '!')
  );
}

ReactDOM.render(
  React.createElement(
    React.Fragment,
    null,
    React.createElement(Greeting, { name: 'Alexandra' }),
    React.createElement(Greeting),
    React.createElement(Greeting, { name: 'Benjamin' })
  ),
  document.getElementById('app')
);
