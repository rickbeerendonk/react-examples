/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global React, ReactDOM */

class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <button
        onClick={/* () => */ this.setState({ count: this.state.count + 1 })}
      >
        This button has been clicked {this.state.count} times
      </button>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ClickMe />);
