/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

class ClickMe extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-instance_class_fields
  state = { count: 0 };
  handleClick = () => {
    // Updates are batched for performance reasons.
    // Therefore this won't work:
    this.setState({ count: this.state.count + 0.4 });
    this.setState({ count: this.state.count + 0.6 });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        This link has been clicked {this.state.count} times
      </button>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ClickMe />);
