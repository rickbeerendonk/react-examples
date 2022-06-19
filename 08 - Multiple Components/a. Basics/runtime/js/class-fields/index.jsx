/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM */

function EditBox({ onChange, value }) {
  return (
    <input autoFocus onChange={e => onChange(e.target.value)} value={value} />
  );
}

function Greeting({ name }) {
  return <h1>Hello {name}!</h1>;
}

class GreetingEditor extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-instance_class_fields
  state = { name: 'World' };
  handleChange = name => {
    this.setState({ name });
  };

  render() {
    return (
      <React.Fragment>
        <EditBox onChange={this.handleChange} value={this.state.name} />
        <Greeting name={this.state.name} />
      </React.Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GreetingEditor />);
