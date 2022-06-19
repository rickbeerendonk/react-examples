/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global createReactClass, React, ReactDOM */

var ClickMe = createReactClass({
  getInitialState: function () {
    return { count: 0 };
  },
  handleClick: function () {
    // this.state may be updated asynchronously:
    this.setState(state => ({ count: state.count + 1 }));
  },
  render: function () {
    return (
      <button onClick={this.handleClick}>
        {'This button has been clicked ' + this.state.count + ' times'}
      </button>
    );
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ClickMe />);
