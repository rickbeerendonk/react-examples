/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global createReactClass, React, ReactDOM */

var EditBox = createReactClass({
  handleChange(e) {
    this.props.onChange(e.target.value);
  },
  render: function () {
    return <input onChange={this.handleChange} value={this.props.name} />;
  }
});

var Greeting = createReactClass({
  render: function () {
    return <h1>Hello {this.props.name}!</h1>;
  }
});

var GreetingEditor = createReactClass({
  getInitialState: function () {
    return { name: 'World' };
  },
  handleChange: function (newName) {
    this.setState({ name: newName });
  },
  render: function () {
    return (
      <div>
        <EditBox onChange={this.handleChange} name={this.state.name} />
        <Greeting name={this.state.name} />
      </div>
    );
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GreetingEditor />);
