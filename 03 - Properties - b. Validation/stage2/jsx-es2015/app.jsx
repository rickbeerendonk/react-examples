/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */

class Greeting extends React.Component {
  // See: https://github.com/tc39/proposal-class-fields
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  render() {
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
}

ReactDOM.render(
  <Greeting name="World" />,
  document.getElementById('app')
);