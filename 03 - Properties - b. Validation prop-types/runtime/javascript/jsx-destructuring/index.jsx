/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */

function Greeting({ name }) {
  return <h1>Hello {name}!</h1>;
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(<Greeting name="World" />, document.getElementById('app'));
