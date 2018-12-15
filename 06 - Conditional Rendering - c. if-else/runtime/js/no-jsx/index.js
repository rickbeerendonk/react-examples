/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    // Bind all non-react methods to this.
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('input', {
        autoFocus: true,
        onChange: this.handleChange,
        value: this.state.name
      }),
      // Change render based on name:
      this.state.name
        ? React.createElement('h1', null, 'Hello ', this.state.name, '!')
        : React.createElement(
            'h1',
            { style: { color: 'red' } },
            'No name provided.'
          )
    );
  }
}

ReactDOM.render(
  React.createElement(GreetingEditor),
  document.getElementById('app')
);
