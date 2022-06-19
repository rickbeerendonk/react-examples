/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM, PropTypes */

function Greeting({ name }) {
  return <h1>Hello {name}!</h1>;
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting name="World" />);
