/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */

function Greeting(props) {
  return React.createElement('h1', null, 'Hello ', props.name, '!');
}
Greeting.defaultProps = { name: 'World' };

ReactDOM.render(React.createElement(Greeting), document.getElementById('app'));
