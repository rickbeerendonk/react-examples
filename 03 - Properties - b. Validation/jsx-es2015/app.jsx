/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
}
Greeting.propTypes = {
  name: React.PropTypes.string.isRequired
};

ReactDOM.render(
  <Greeting name="World" />,
  document.getElementById('app')
);