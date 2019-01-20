/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  render() {
    return 'Hello World!';
  }
}

ReactDOM.render(<Greeting />, document.getElementById('app'));
