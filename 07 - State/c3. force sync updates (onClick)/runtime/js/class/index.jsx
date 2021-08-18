/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Updates are batched for performance reasons.
    // Use ReactDOM.flushSync():
    ReactDOM.flushSync(() => {
      this.setState({ count: this.state.count + 0.4 });
    });
    ReactDOM.flushSync(() => {
      this.setState({ count: this.state.count + 0.6 });
    });
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        This link has been clicked {this.state.count} times
      </button>
    );
  }
}

ReactDOM.render(<ClickMe />, document.getElementById('root'));
