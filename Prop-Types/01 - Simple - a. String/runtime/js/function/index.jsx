/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM, PropTypes */

function Greeting(props) {
  return <h1>Hello {props.name}!</h1>;
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(<Greeting name="World" />, document.getElementById('root'));
