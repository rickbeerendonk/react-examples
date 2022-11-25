/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM, PropTypes */

function Greeting(props) {
  return React.createElement('h1', null, 'Hello ', props.name, '!');
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Greeting, { name: 'World' }));
