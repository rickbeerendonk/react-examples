/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class Three extends React.Component {
  render() {
    return <h1 style={{ color: this.props.color }}>Three</h1>;
  }
}

class Two extends React.Component {
  render() {
    return <Three color={this.props.color} />;
  }
}

class One extends React.Component {
  render() {
    return <Two color={this.props.color} />;
  }
}

ReactDOM.render(
  <One color="red" />,
  document.getElementById('app')
);
