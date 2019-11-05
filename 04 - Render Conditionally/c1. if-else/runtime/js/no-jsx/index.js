/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting(props) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('h3', null, 'Greeting:'),
    // Change render based on name:
    props.name
      ? React.createElement('div', null, 'Hello ', props.name, '!')
      : React.createElement(
          'div',
          { style: { color: 'red' } },
          'No name provided.'
        )
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
