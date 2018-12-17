/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global createReactClass, React, ReactDOM */

var Greeting = createReactClass({
  handleChange: function(e) {
    alert('Event handled.\nTarget: ' + e.target + '\nValue: ' + e.target.value);
  },
  render: function() {
    return <input onChange={this.handleChange} value="Hello World!" />;
  }
});

ReactDOM.render(<Greeting />, document.getElementById('app'));
