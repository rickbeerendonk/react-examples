/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */

function EditBox({ onChange, value }) {
  return React.createElement('input', {
    autoFocus: true,
    onChange: e => onChange(e.target.value),
    value: value
  });
}

function Greeting({ name }) {
  return React.createElement('h1', null, 'Hello ', name, '!');
}

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.onChange = this.onChange.bind(this);
  }
  onChange(name) {
    this.setState({ name });
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(EditBox, {
        onChange: this.onChange,
        value: this.state.name
      }),
      React.createElement(Greeting, { name: this.state.name })
    );
  }
}

ReactDOM.render(
  React.createElement(GreetingEditor),
  document.getElementById('app')
);
