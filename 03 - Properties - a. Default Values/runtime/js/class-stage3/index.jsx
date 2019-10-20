/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  // Proposal: https://github.com/tc39/proposal-static-class-features
  // Support: http://kangax.github.io/compat-table/esnext/#test-static_class_fields
  static defaultProps = {
    name: 'World'
  };
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

ReactDOM.render(<Greeting />, document.getElementById('app'));
