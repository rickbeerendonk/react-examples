/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM, PropTypes */

class Greeting extends React.Component {
  render() {
    return React.createElement('h1', null, 'Hello ', this.props.name, '!');
  }
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(
  React.createElement(Greeting, { name: 'World' }),
  document.getElementById('app')
);
