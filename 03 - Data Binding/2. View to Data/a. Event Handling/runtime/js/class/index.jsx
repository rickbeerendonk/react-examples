/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

class App extends React.Component {
  changed(e) {
    alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}
Data: ${e.nativeEvent.data}`);
  }
  render() {
    return <input onChange={this.changed} value="Hello React!" />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
