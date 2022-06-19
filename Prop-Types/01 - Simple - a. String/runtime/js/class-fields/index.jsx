/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM, PropTypes */

class Greeting extends React.Component {
  // Proposal: https://github.com/tc39/proposal-static-class-features
  // Support: http://kangax.github.io/compat-table/esnext/#test-static_class_fields
  static propTypes = {
    name: PropTypes.string.isRequired
  };
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting name="World" />);
