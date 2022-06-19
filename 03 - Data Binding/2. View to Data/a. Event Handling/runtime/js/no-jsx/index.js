/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

function App() {
  function changed(e) {
    alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}
Data: ${e.nativeEvent.data}`);
  }

  return React.createElement('input', {
    onChange: changed,
    value: 'Hello React!'
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
