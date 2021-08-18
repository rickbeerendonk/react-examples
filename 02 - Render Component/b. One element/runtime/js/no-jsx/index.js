/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting() {
  return React.createElement('h1', null, 'Hello World!');
}

ReactDOM.render(React.createElement(Greeting), document.getElementById('root'));
