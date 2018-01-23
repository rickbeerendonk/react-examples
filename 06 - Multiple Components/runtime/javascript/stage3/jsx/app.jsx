/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const EditBox = ({onChange, name}) => (
  <input onChange={e => onChange(e.target.value)} value={name} />
);

const Greeting = ({name}) => (
  <h1>Hello {name}!</h1>
);

class GreetingEditor extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { name: 'World' };
  onChange = (newName) => {
    this.setState({ name: newName });
  }

  render() {
    return (
      <div>
        <EditBox onChange={this.onChange} name={this.state.name} />
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

ReactDOM.render(
  <GreetingEditor />,
  document.getElementById('app')
);
