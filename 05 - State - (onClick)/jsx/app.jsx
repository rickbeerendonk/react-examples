/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

var ClickMe = React.createClass({
  getInitialState: function () {
    return { count: 0 };
  },
  onClick: function () {
    this.setState({ count: this.state.count + 1 });
  },
  render: function () {
    return (
      <a onClick={this.onClick}>
        {'This link has been clicked ' + this.state.count + ' times'}
      </a>
    );
  }
});

ReactDOM.render(
  <ClickMe />,
  document.getElementById('app')
);