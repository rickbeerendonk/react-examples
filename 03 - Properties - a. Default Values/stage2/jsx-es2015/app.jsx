/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class Greeting extends React.Component {
  // See: https://github.com/tc39/proposal-class-fields
  static defaultProps = {
    name: 'World'
  }
  render() {
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);