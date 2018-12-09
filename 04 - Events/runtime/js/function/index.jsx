/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */

function Greeting() {
  function changed(e) {
    alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}`);
  }

  return <input onChange={changed} value="Hello World!" />;
}

ReactDOM.render(<Greeting />, document.getElementById('app'));
