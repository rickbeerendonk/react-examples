/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global createReactClass, React, ReactDOM */

var ClickMe = createReactClass({
  getInitialState: function () {
    return { count: 0 };
  },
  onClick: function () {
    // this.state may be updated asynchronously:
    this.setState(prevState => ({ count: prevState.count + 1 }));
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