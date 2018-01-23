/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const EditBox = ({onChange, name}) =>
  React.createElement('input', { onChange: e => onChange(e.target.value), value: name });

const Greeting = ({name}) =>
  React.createElement('h1', null, 'Hello ', name, '!');

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.onChange = this.onChange.bind(this);
  }
  onChange(newName) {
    this.setState(() => ({ name: newName }));
  }
  render() {
    return React.createElement('div', null,
      React.createElement(EditBox, { onChange: this.onChange, name: this.state.name }),
      React.createElement(Greeting, { name: this.state.name })
    );
  }
}

ReactDOM.render(
  React.createElement(GreetingEditor),
  document.getElementById('app')
);