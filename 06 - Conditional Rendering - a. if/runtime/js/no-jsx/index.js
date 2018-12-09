/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    // Bind all non-react methods to this.
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('input', {
        autoFocus: true,
        onChange: this.onChange,
        value: this.state.name
      }),
      // Only render when a name is truthy:
      this.state.name &&
        React.createElement('h1', null, 'Hello ', this.state.name, '!')
    );
  }
}

ReactDOM.render(
  React.createElement(GreetingEditor),
  document.getElementById('app')
);
