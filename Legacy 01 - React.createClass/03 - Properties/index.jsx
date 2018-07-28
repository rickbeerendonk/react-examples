/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global createReactClass, React, ReactDOM */
/* eslint react/prop-types:"off" */

var Greeting = createReactClass({
  render: function() {
    return <h1>Hello {this.props.name}!</h1>;
  }
});

ReactDOM.render(<Greeting name="World" />, document.getElementById('app'));
