/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting() {
  function handleChange(e) {
    // Events are pooled. To prevent properties from resetting, remove the
    // event from the pool by calling event.persist(). See error in console.
    e.persist();

    function showHandled() {
      alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}`);
    }

    setTimeout(showHandled, 1000);
  }

  return React.createElement('input', {
    onChange: handleChange,
    value: 'Hello World!'
  });
}

ReactDOM.render(React.createElement(Greeting), document.getElementById('app'));
