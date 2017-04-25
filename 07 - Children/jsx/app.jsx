/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

var Greeting = React.createClass({
  render: function () {
    return (
      <i>Hello {this.props.name}!</i>
    );
  }
});

var List = React.createClass({
  render: function () {
    return (
      <ul>{
        React.Children.map(this.props.children, function (child, i) {
          return <li key={i}>{child}</li>
        })
      }</ul>
    );
  }
});

ReactDOM.render(
  <List>
    <Greeting name="Alexandra" />
    <Greeting name="Benjamin" />
    <Greeting name="Charlotte" />
  </List>,
  document.getElementById('app')
);