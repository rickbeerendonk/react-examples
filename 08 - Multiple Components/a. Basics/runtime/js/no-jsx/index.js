/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

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

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(name) {
    this.setState({ name });
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(EditBox, {
        onChange: this.handleChange,
        value: this.state.name
      }),
      React.createElement(Greeting, { name: this.state.name })
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(GreetingEditor));
