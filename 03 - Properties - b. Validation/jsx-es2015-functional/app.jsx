/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

const Greeting = props => (
  <h1>Hello {props.name}!</h1>
);
Greeting.propTypes = {
  name: React.PropTypes.string.isRequired
};

ReactDOM.render(
  <Greeting name="World" />,
  document.getElementById('app')
);