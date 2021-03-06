/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  changed(e) {
    alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}`);
  }
  render() {
    return <input onChange={this.changed} value="Hello World!" />;
  }
}

ReactDOM.render(<Greeting />, document.getElementById('app'));
