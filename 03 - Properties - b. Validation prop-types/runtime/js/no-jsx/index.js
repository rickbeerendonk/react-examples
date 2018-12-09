/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */

function Greeting(props) {
  return React.createElement('h1', null, 'Hello ', props.name, '!');
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(
  React.createElement(Greeting, { name: 'World' }),
  document.getElementById('app')
);
