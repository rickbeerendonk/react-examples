/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  onChange(e) {
    alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}`);
  }
  render() {
    return <input onChange={this.onChange} value='Hello World!' />;
  }
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);