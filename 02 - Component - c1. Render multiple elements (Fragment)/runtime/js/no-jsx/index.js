/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('h1', null, 'Hello World!'),
    'What do you think about React?',
    React.createElement('div', null, 'It looks amazing.')
  );
}

ReactDOM.render(React.createElement(Greeting), document.getElementById('app'));
