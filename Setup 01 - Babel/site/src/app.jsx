/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class HelloReact extends React.Component {
  render() {
    return (
      <h1>Hello React!</h1>
    );
  }
}

ReactDOM.render(
  <HelloReact />,
  document.getElementById('app')
);
