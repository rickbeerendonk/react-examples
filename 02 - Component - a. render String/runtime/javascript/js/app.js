/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  render() {
    return 'Hello World!';
  }
}

ReactDOM.render(React.createElement(Greeting), document.getElementById('app'));
