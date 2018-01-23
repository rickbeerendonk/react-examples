/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  onChange(e) {
    // Events are pooled. To prevent properties from resetting, remove the
    // event from the pool by calling event.persist(). See error in console.
    e.persist();

    const showHandled = () => {
      alert('Event handled.\nTarget: ' + e.target + '\nValue: ' + e.target.value);
    };

    setTimeout(showHandled, 1000);
  }
  render() {
    return React.createElement('input', { onChange: this.onChange, value: 'Hello World!' });
  }
}

ReactDOM.render(
  React.createElement(Greeting),
  document.getElementById('app')
);