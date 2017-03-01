/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

var Greeting = React.createClass({
  render: function () {
    return (
      <h1>Hello World!</h1>
    );
  }
});

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);