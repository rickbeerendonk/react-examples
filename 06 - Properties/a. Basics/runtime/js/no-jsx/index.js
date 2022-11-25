/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting(props) {
  return React.createElement('h1', null, 'Hello ', props.name, '!');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Greeting, { name: 'World' }));
