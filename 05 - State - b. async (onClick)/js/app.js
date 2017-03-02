/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

var ClickMe = React.createClass({
  displayName: 'ClickMe',
  getInitialState: function () {
    return { count: 0 };
  },
  onClick: function () {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  },
  render: function () {
    return React.createElement('a', { onClick: this.onClick },
      'This link has been clicked ',
      this.state.count,
      ' times'
    );
  }
});

ReactDOM.render(
  React.createElement(ClickMe),
  document.getElementById('app')
);