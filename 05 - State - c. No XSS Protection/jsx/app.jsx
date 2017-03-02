/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

var Greeting = React.createClass({
  getInitialState: function () {
    return { name: 'World' };
  },
  onChange: function (e) {
    this.setState({ name: e.target.value });
  },
  render: function () {
    return (
      <div>
        <input onChange={this.onChange} value={this.state.name} />
        <h1>Hello <span dangerouslySetInnerHTML={{ __html: this.state.name }} />!</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);
