/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

var HelloWorld = React.createClass({
  componentDidMount: function () {
    this.myH1.innerHTML = 'Hello <i>React</i>!!!';
  },
  render: function () {
    return (
      <h1 ref={(ref) => this.myH1 = ref}>Hello World!</h1>
    );
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);