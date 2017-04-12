/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */

var Greeting = React.createClass({
  displayName: 'Greeting',
  propTypes: {
    name: PropTypes.string.isRequired
  },
  render: function () {
    return React.createElement('h1', null, 'Hello ', this.props.name, '!');
  }
});

ReactDOM.render(
  React.createElement(Greeting, { name: 'World' }),
  document.getElementById('app')
);