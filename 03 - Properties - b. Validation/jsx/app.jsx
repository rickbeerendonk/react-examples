/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

var Greeting = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
});

ReactDOM.render(
  <Greeting name="World" />,
  document.getElementById('app')
);