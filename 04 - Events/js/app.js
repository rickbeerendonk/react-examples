/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

var Greeting = React.createClass({
  displayName: 'Greeting',
  onChange: function (e) {
    alert('Event handled.\nTarget: ' + e.target + '\nValue: ' + e.target.value);
  },
  render: function () {
    return React.createElement('input', { onChange: this.onChange, value: 'Hello World!' });
  }
});

ReactDOM.render(
  React.createElement(Greeting),
  document.getElementById('app')
);