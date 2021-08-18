/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting(props) {
  return <h1>Hello {props.name}!</h1>;
}

ReactDOM.render(<Greeting name="World" />, document.getElementById('root'));
