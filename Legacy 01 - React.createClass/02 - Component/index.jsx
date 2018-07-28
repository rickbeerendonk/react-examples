/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global createReactClass, React, ReactDOM */

var Greeting = createReactClass({
  render: function() {
    return <h1>Hello World!</h1>;
  }
});

ReactDOM.render(<Greeting />, document.getElementById('app'));
