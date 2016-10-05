/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class Greeting extends React.Component {
  render() {
    return (
      <i>Hello {this.props.name}</i>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <ul>{
        this.props.children.map(function (child, i) {
          return <li key={i}>{child}</li>
        })
      }</ul>
    );
  }
}

ReactDOM.render(
  <List>
    <Greeting name="Alexandra" />
    <Greeting name="Benjamin" />
    <Greeting name="Charlotte" />
  </List>,
  document.getElementById('app')
);