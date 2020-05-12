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
      <a onClick={this.handleClick}>
        {'This link has been clicked ' + this.state.count + ' times'}
      </a>
    );
  }
});

ReactDOM.render(<ClickMe />, document.getElementById('app'));
