/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  render() {
    return (
      'Hello World!'
    );
  }
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);